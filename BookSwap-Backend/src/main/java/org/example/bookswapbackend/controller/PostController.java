package org.example.bookswapbackend.controller;

import org.example.bookswapbackend.model.Book;
import org.example.bookswapbackend.model.Post;
import org.example.bookswapbackend.service.BookService;
import org.example.bookswapbackend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//TODO: Change the RequestMapping to /v1/post
//@RequestMapping("api/v1/post")
@RequestMapping("/post")
public class PostController {
    @Autowired
    PostService postService;

    @Autowired
    BookService bookService;

    @PostMapping("/add")
    public ResponseEntity<?> addPost(Book book , Post post) {
        Book saved_book = bookService.savebook(book);
        post.setBook_id(saved_book);
        return postService.addPost(post);
    }

    @GetMapping("/get/{user_id}")
    public ResponseEntity<?> getPostByUserId(String user_id) {
        return postService.getPostByUserId(user_id);
    }

    @GetMapping("/recent")
    public ResponseEntity<?> getRecentPosts(@RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "10") int size) {
        return postService.getRecentPosts(page,size);
    }

    @GetMapping("/count")
    public ResponseEntity<?> getPostCount() {
        return postService.getPostCount();
    }
}
