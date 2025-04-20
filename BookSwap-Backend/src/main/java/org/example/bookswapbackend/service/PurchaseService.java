package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.PurchaseRepository;
import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.model.Post;
import org.example.bookswapbackend.model.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService {

    @Autowired
    PurchaseRepository purchaseRepo;

    @Autowired
    PostService postService;

    @Autowired
    CustomerService customerService;

    public ResponseEntity<?> buyPost(Long postId,String username) {
        if(postId == null) {
            return ResponseEntity.badRequest().body("Post ID must not be null");
        }
        Post post = postService.getPostObjectById(postId);
        Customer customer = customerService.getCustomerObjectById(username);
        Purchase purchase = new Purchase();
        purchase.setPost(post);
        purchase.setUser(customer);
        Purchase savedPurchase = purchaseRepo.save(purchase);
        return ResponseEntity.ok(savedPurchase);
    }

    public ResponseEntity<?> getAllPurchases(String username, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        List<Purchase> purchases = purchaseRepo.findByCustomerUsername(username, pageable);
        if (purchases != null && !purchases.isEmpty()) {
            return ResponseEntity.ok(purchases);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
