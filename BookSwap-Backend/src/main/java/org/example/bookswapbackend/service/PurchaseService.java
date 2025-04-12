package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.PurchaseRepository;
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

    public ResponseEntity<?> buyPost(Purchase purchase) {
        if (purchase.getPost() == null || purchase.getUser() == null) {
            return ResponseEntity.badRequest().body("Book and Customer must not be null");
        }
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
