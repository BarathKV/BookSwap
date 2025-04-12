package org.example.bookswapbackend.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.example.bookswapbackend.dao.CustomerRepository;
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

    @PostMapping("/add")
    public ResponseEntity<?> addPost(HttpServletRequest request, Book book, Post post) {
        String token = request.getHeader("Authorization").substring(7);
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }
        String username = jwtUtils.getUserNameFromJwtToken(token);
        Optional<Customer> customer = custRepo.findById(username);
        if (customer.isEmpty()) {
            return ResponseEntity.badRequest().body("Customer not found");
        }
        Book saved_book = bookService.savebook(book);
        post.setBook(saved_book);
        return postService.addPost(post);
    }

    @GetMapping("/get/{user_id}")
    public ResponseEntity<?> getPostByUserId(@PathVariable String user_id,
                                             @RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size) {
        return postService.getPostByUserId(user_id, page, size);
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
}
