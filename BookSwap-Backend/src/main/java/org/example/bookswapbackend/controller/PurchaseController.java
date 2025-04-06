package org.example.bookswapbackend.controller;

import org.example.bookswapbackend.model.Purchase;
import org.example.bookswapbackend.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//TODO: Change the RequestMapping to /v1/purchase
//@RequestMapping("api/v1/purchase")
@RequestMapping("/pur")
public class PurchaseController {
    @Autowired
    PurchaseService purchaseService;

    @PostMapping("/buy")
    public ResponseEntity<?> buyBook(@RequestBody Purchase purchase) {
        return purchaseService.buyPost(purchase);
    }

    @GetMapping("/purchases")
    public ResponseEntity<?> getAllPurchases(@RequestParam String customer) {
        return purchaseService.getAllPurchases(customer);
    }

}
