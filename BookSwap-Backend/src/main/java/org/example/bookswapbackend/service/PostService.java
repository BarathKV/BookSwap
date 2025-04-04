package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.PostRepository;
import org.example.bookswapbackend.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    PostRepository postRepo;

    public ResponseEntity<?> addPost(Post post) {
        if(post.getBook_id() == null) {
            return ResponseEntity.badRequest().body("Book must not be null");
        }
        if(post.getUser_id() == null) {
            return ResponseEntity.badRequest().body("User must not be null");
        }
        if(post.getCondition() == null) {
            return ResponseEntity.badRequest().body("Condition must not be null");
        }
        if(post.getPrice() == null) {
            return ResponseEntity.badRequest().body("Price must not be null");
        }
        if(post.getPrice() <= 0) {
            return ResponseEntity.badRequest().body("Price must be greater than 0");
        }
        Post savedPost = postRepo.save(post);
        return ResponseEntity.ok(savedPost);
    }

    public ResponseEntity<?> getPostByUserId(String userId) {
        if(userId == null || userId.isEmpty()) {
            return ResponseEntity.badRequest().body("User ID must not be null or empty");
        }
        List<Post> posts = postRepo.findByUserId(userId);
        if(posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }


    public ResponseEntity<?> getRecentPosts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Post> posts = postRepo.findAll(pageable);
        if(posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }

    public ResponseEntity<?> getPostCount() {
        long count = postRepo.count();
        if(count == 0) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(count);
        }
    }
}
