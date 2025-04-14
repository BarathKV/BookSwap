package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.PostRepository;
import org.example.bookswapbackend.dto.PostDetails;
import org.example.bookswapbackend.dto.PostSpecification;
import org.example.bookswapbackend.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    @Autowired
    PostRepository postRepo;

    public ResponseEntity<?> addPost(Post post) {
        if (post.getBook() == null) {
            return ResponseEntity.badRequest().body("Book must not be null");
        }
        if (post.getUser() == null) {
            return ResponseEntity.badRequest().body("User must not be null");
        }
        if (post.getCondition() == null) {
            return ResponseEntity.badRequest().body("Condition must not be null");
        }
        if (post.getPrice() == null) {
            return ResponseEntity.badRequest().body("Price must not be null");
        }
        if (post.getPrice() <= 0) {
            return ResponseEntity.badRequest().body("Price must be greater than 0");
        }
        if (post.getDescription() == null || post.getDescription().isEmpty()) {
            return ResponseEntity.badRequest().body("Description must not be null or empty");
        }
        if (post.getImageFile() == null || post.getImageFile().isEmpty()) {
            return ResponseEntity.badRequest().body("Image file must not be null or empty");
        }
        Post savedPost = postRepo.save(post);
        return ResponseEntity.ok(savedPost);
    }

    public ResponseEntity<?> getPostByUserId(String userId, int page, int size) {
        if (userId == null || userId.isEmpty()) {
            return ResponseEntity.badRequest().body("User ID must not be null or empty");
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<PostDetails> posts = postRepo.findByUserId(userId, pageable);
        if (posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }

    public ResponseEntity<?> getRecentPosts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<PostDetails> posts = postRepo.findRecent(pageable);
        if (posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }

    public ResponseEntity<?> getPostCount() {
        long count = postRepo.count();
        if (count == 0) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(count);
        }
    }

    public ResponseEntity<?> getPostCountByUserId(String username) {
        if (username == null || username.isEmpty()) {
            return ResponseEntity.badRequest().body("User ID must not be null or empty");
        }
        long count = postRepo.countUsersByStatus(username);
        if (count == 0) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(count);
        }

    }

    public ResponseEntity<?> searchPostsByTitle(String title, int page, int size) {
        if (title == null || title.isEmpty()) {
            return ResponseEntity.badRequest().body("Title must not be null or empty");
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<PostDetails> posts = postRepo.findByTitleContaining(title, pageable);
        if (posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }

    public ResponseEntity<?> searchPostsByAuthor(String author, int page, int size) {
        if (author == null || author.isEmpty()) {
            return ResponseEntity.badRequest().body("Author must not be null or empty");
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<PostDetails> posts = postRepo.findByAuthorContaining(author, pageable);
        if (posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }

    public ResponseEntity<?> getPosts(String title, String author, Post.Condition condition, Long price, Pageable pageable) {
        Specification<Post> spec = Specification.where(PostSpecification.hasTitle(title))
                .and(PostSpecification.hasAuthor(author))
                .and(PostSpecification.hasCondition(condition))
                .and(PostSpecification.hasPriceLessThan(price));

        Page<PostDetails> result = postRepo.findAll(spec, pageable, PostDetails.class);
        if (result.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(result);
    }

    public ResponseEntity<?> searchPostsByISBN(String isbn, int page, int size) {
        if (isbn == null || isbn.isEmpty()) {
            return ResponseEntity.badRequest().body("ISBN must not be null or empty");
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<PostDetails> posts = postRepo.findByISBN(isbn, pageable);
        if (posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }

    public ResponseEntity<?> searchPostsByLocation(String location, int page, int size) {
        if (location == null || location.isEmpty()) {
            return ResponseEntity.badRequest().body("Location must not be null or empty");
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<PostDetails> posts = postRepo.findByLocation(location, pageable);
        if (posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }

    public ResponseEntity<?> getPostById(Long postId) {
        if (postId == null) {
            return ResponseEntity.badRequest().body("Post ID must not be null");
        }
        Post post = postRepo.findById(postId).orElse(null);
        if (post == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(post);
        }
    }
}
