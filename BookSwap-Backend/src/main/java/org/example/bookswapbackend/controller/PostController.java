package org.example.bookswapbackend.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.example.bookswapbackend.dao.BookRepository;
import org.example.bookswapbackend.dao.CustomerRepository;
import org.example.bookswapbackend.dto.NewPost;
import org.example.bookswapbackend.model.Book;
import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.model.Post;
import org.example.bookswapbackend.security.JwtUtils;
import org.example.bookswapbackend.service.BookService;
import org.example.bookswapbackend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
//TODO: Change the RequestMapping to /v1/post
//@RequestMapping("api/v1/post")
@RequestMapping("/post")
public class PostController {
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    PostService postService;

    @Autowired
    BookService bookService;

    @Autowired
    CustomerRepository custRepo;

    @Autowired
    BookRepository bookRepo;

    @PostMapping("/add")
    public ResponseEntity<?> addPost(HttpServletRequest request, @RequestBody NewPost newpost) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }

        String token = authHeader.substring(7);
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }

        String username = jwtUtils.getUserNameFromJwtToken(token);
        Optional<Customer> customer = custRepo.findById(username);
        if (customer.isEmpty()) {
            return ResponseEntity.badRequest().body("Customer not found");
        }

        Optional<Book> existingBook = bookRepo.findByIsbn(newpost.getIsbn());
        Book book = existingBook.orElseGet(() -> {
            Book newBook = new Book();
            newBook.setTitle(newpost.getTitle());
            newBook.setAuthor(newpost.getAuthor());
            newBook.setIsbn(newpost.getIsbn());
            return bookService.savebook(newBook);
        });

        Post post = new Post();
        post.setCondition(newpost.getCondition());
        post.setPrice(newpost.getPrice());
        post.setUser(customer.get());
        post.setDescription(newpost.getDescription());
        post.setImageFile(newpost.getImageFile());
        post.setBook(book);

        return postService.addPost(post);
    }

    @GetMapping("/user")
    public ResponseEntity<?> getPostByUserId( HttpServletRequest request,
                                             @RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }

        String token = authHeader.substring(7);
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }

        String username = jwtUtils.getUserNameFromJwtToken(token);
        return postService.getPostByUserId(username,page, size);
    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllPosts(@RequestParam String user_id,
                                         @RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "10") int size) {
        return postService.getAllPosts(user_id,page, size);
    }

    @GetMapping("/recent")
    public ResponseEntity<?> getRecentPosts(@RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "10") int size) {
        return postService.getRecentPosts(page, size);
    }

    @GetMapping("/count")
    public ResponseEntity<?> getPostCount() {
        return postService.getPostCount();
    }

    @GetMapping("/count/user/{user_id}")
    public ResponseEntity<?> getPostCountByUserId(@PathVariable String user_id) {
        return postService.getPostCountByUserId(user_id);
    }

    @GetMapping("/search/title/{title}")
    public ResponseEntity<?> searchPostsByTitle(@PathVariable String title,
                                                @RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "10") int size) {
        return postService.searchPostsByTitle(title, page, size);
    }

    @GetMapping("/search/author/{author}")
    public ResponseEntity<?> searchPostsByAuthor(@PathVariable String author,
                                                 @RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "10") int size) {
        return postService.searchPostsByAuthor(author, page, size);
    }

    @GetMapping("/search/isbn/{isbn}")
    public ResponseEntity<?> searchPostsByISBN(@PathVariable String isbn,
                                               @RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "10") int size) {
        return postService.searchPostsByISBN(isbn, page, size);
    }

    @GetMapping("/search/location/{location}")
    public ResponseEntity<?> searchPostsByLocation(@PathVariable String location,
                                                   @RequestParam(defaultValue = "0") int page,
                                                   @RequestParam(defaultValue = "10") int size) {
        return postService.searchPostsByLocation(location, page, size);
    }

    @GetMapping("/filters")
    public ResponseEntity<?> getPosts(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String author,
            @RequestParam(required = false) Post.Condition condition,
            @RequestParam(required = false) Long price,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        return postService.getPosts(title, author, condition, price, pageable);
    }

    @GetMapping("/get/{post_id}")
    public ResponseEntity<?> getPostById(@PathVariable Long post_id) {
        return postService.getPostById(post_id);
    }
}
