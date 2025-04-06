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
        if(review.getPost() == null) {
            return ResponseEntity.badRequest().body("Post must not be null");
        }
        if(review.getUser() == null) {
            return ResponseEntity.badRequest().body("User must not be null");
        }
        if(review.getWriter() == null) {
            return ResponseEntity.badRequest().body("Writer must not be null");
        }
        if(review.getStars() == null){
            return ResponseEntity.badRequest().body("Stars must not be null");
        }
        Optional<Purchase> ifpurchased = Optional.ofNullable(purchaseRepo.findByBuyerAndPost(review.getPost(), review.getUser()));
        if(ifpurchased.isEmpty()) {
            return ResponseEntity.badRequest().body("User has not purchased this book");
        }
        Optional<Review> existingReview = Optional.ofNullable(reviewRepo.findByBookAndCustomer(review.getPost(), review.getUser()));
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
        Page<Review> review = reviewRepo.findByCustomer(customerId, pageable);
        if(review.hasContent()) {
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
        Page<Review> review = reviewRepo.findByWriter(writerId, pageable);
        if(review.hasContent()) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
