package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.PurchaseRepository;
import org.example.bookswapbackend.model.Purchase;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService {
    PurchaseRepository purchaseRepo;

    public ResponseEntity<?> buyBook(Purchase purchase) {
        if (purchase.getBook() == null || purchase.getCustomer() == null) {
            return ResponseEntity.badRequest().body("Book and Customer must not be null");
        }
        Purchase savedPurchase = purchaseRepo.save(purchase);
        return ResponseEntity.ok(savedPurchase);
    }

    public ResponseEntity<?> getAllPurchases(String customer) {
        if (customer == null || customer.isEmpty()) {
            return ResponseEntity.badRequest().body("Customer must not be null or empty");
        }
        List<Purchase> purchases = purchaseRepo.findByCustomerUsername(customer);
        if (purchases != null && !purchases.isEmpty()) {
            return ResponseEntity.ok(purchases);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
