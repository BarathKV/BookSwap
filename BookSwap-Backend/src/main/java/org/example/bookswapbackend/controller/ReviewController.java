package org.example.bookswapbackend.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.model.Review;
import org.example.bookswapbackend.security.JwtUtils;
import org.example.bookswapbackend.service.CustomerService;
import org.example.bookswapbackend.service.PostService;
import org.example.bookswapbackend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.example.bookswapbackend.dto.AddedReview;

@RestController
//TODO: Change the RequestMapping to /v1/review
//@RequestMapping("api/v1/review")
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    CustomerService customerService;

    @Autowired
    PostService postService;

    @PostMapping("/add")
    public ResponseEntity<?> addReview(HttpServletRequest request,
                                       @RequestParam Long post_id,
                                       @RequestBody AddedReview reviewRequest) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }

        String token = authHeader.substring(7);
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }

        String username = jwtUtils.getUserNameFromJwtToken(token);
        Customer customer = customerService.getCustomerObjectById(username);
        if (customer == null) {
            return ResponseEntity.badRequest().body("Customer not found");
        }

        Review review = new Review();
        review.setWriter(customer);
        review.setPost(postService.getPostObjectById(post_id));
        review.setUser(postService.getPostObjectById(post_id).getUser());
        review.setReviewText(reviewRequest.getReviewText());
        review.setStars(reviewRequest.getStars());

        return reviewService.addReview(review);
    }

    @GetMapping("/{post_id}")
    public ResponseEntity<?> getReviewByPostId(@PathVariable int post_id) {
        return reviewService.getReviewByPostId(post_id);
    }

    @GetMapping("/cust")
    public ResponseEntity<?> getReviewByCustomer(@RequestParam String customerId,
                                                 @RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "10") int size) {
        return reviewService.getReviewByCustomer(customerId, page, size);
    }

    @GetMapping("/get")
    public ResponseEntity<?> getReviewByWriter(HttpServletRequest request,
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
        return reviewService.getReviewByWriter(username, page, size);
    }

}
