package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.ReviewRepository;
import org.example.bookswapbackend.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepo;


    public ResponseEntity<?> addReview(Review review) {
        if(review.getPost_id() == null) {
            return ResponseEntity.badRequest().body("Post must not be null");
        }
        if(review.getCustomer() == null) {
            return ResponseEntity.badRequest().body("User must not be null");
        }
        if(review.getWriter() == null) {
            return ResponseEntity.badRequest().body("Writer must not be null");
        }
        if(review.getStars() == null){
            return ResponseEntity.badRequest().body("Stars must not be null");
        }
        Optional<Review> existingReview = Optional.ofNullable(reviewRepo.findByBookAndCustomer(review.getPost_id(), review.getCustomer()));
        if(existingReview.isPresent()) {
            return ResponseEntity.badRequest().body("Review already exists");
        }
        Review savedReview = reviewRepo.save(review);
        return ResponseEntity.ok(savedReview);
    }

    public ResponseEntity<?> getReviewByCustomer(String customerId, int page, int size) {
        if(customerId == null) {
            return ResponseEntity.badRequest().body("Customer ID must not be null");
        }
        Pageable pageable = PageRequest.of(page, size);
        Optional<Review> review = Optional.ofNullable(reviewRepo.findByCustomer(customerId, pageable));
        if(review.isPresent()) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<?> getReviewByWriter(String writerId, int page, int size) {
        if(writerId == null) {
            return ResponseEntity.badRequest().body("Writer ID must not be null");
        }
        Pageable pageable = PageRequest.of(page, size);
        Optional<Review> review = Optional.ofNullable(reviewRepo.findByWriter(writerId, pageable));
        if(review.isPresent()) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
