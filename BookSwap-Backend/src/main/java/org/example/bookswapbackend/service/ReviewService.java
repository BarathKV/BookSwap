package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.PurchaseRepository;
import org.example.bookswapbackend.dao.ReviewRepository;
import org.example.bookswapbackend.model.Purchase;
import org.example.bookswapbackend.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepo;

    @Autowired
    PurchaseRepository purchaseRepo;


    public ResponseEntity<?> addReview(Review review) {
        if (review.getPost() == null) {
            return ResponseEntity.badRequest().body("Post must not be null");
        }
        if (review.getUser() == null) {
            return ResponseEntity.badRequest().body("User must not be null");
        }
        if (review.getWriter() == null) {
            return ResponseEntity.badRequest().body("Writer must not be null");
        }
        if (review.getStars() == null) {
            return ResponseEntity.badRequest().body("Stars must not be null");
        }
        Optional<Purchase> purchased = purchaseRepo.findByBuyerAndPost(review.getPost(), review.getWriter());
        if (purchased.isEmpty()) {
            return ResponseEntity.badRequest().body("User"+review.getWriter().getUsername()+" has not purchased post" + review.getPost().getPostId());
        }
        Optional<Review> existingReview = reviewRepo.findByBookAndCustomer(review.getPost(), review.getUser());
        if (existingReview.isPresent()) {
            return ResponseEntity.badRequest().body("Review already exists");
        }
        Review savedReview = reviewRepo.save(review);
        return ResponseEntity.ok(savedReview);
    }

    public ResponseEntity<?> getReviewByCustomer(String customerId, int page, int size) {
        if (customerId == null) {
            return ResponseEntity.badRequest().body("Customer ID must not be null");
        }
        Pageable pageable = PageRequest.of(page, size);
        Page<Review> review = reviewRepo.findByCustomer(customerId, pageable);
        if (review.hasContent()) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<?> getReviewByWriter(String writerId, int page, int size) {
        if (writerId == null) {
            return ResponseEntity.badRequest().body("Writer ID must not be null");
        }
        Pageable pageable = PageRequest.of(page, size);
        Page<Review> review = reviewRepo.findByWriter(writerId, pageable);
        if (review.hasContent()) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<?> getReviewByPostId(int postId) {
        if (postId == 0) {
            return ResponseEntity.badRequest().body("Post ID must not be 0");
        }
        Optional<Review> review = Optional.ofNullable(reviewRepo.findByPostId(postId));
        if (review.isPresent()) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
