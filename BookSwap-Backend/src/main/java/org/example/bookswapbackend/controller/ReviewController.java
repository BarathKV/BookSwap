package org.example.bookswapbackend.controller;

import org.example.bookswapbackend.model.Review;
import org.example.bookswapbackend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//TODO: Change the RequestMapping to /v1/review
//@RequestMapping("api/v1/review")
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @PostMapping("/add")
    public ResponseEntity<?> addReview(@RequestBody Review review) {
        return reviewService.addReview(review);
    }

    @GetMapping("/cust/{customerId}")
    public ResponseEntity<?> getReviewByCustomer(@PathVariable String customerId,
                                                @RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "10") int size) {
        return reviewService.getReviewByCustomer(customerId, page, size);
    }

    @GetMapping("/writer/{writerId}")
    public ResponseEntity<?> getReviewByWriter(@PathVariable String writerId,
                                               @RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "10") int size) {
        return reviewService.getReviewByWriter(writerId, page, size);
    }

}
