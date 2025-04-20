package org.example.bookswapbackend.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.example.bookswapbackend.model.Purchase;
import org.example.bookswapbackend.security.JwtUtils;
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

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/buy")
    public ResponseEntity<?> buyBook(HttpServletRequest request,
                                     @RequestParam("postId") Long postId) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }

        String token = authHeader.substring(7);
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }

        String username = jwtUtils.getUserNameFromJwtToken(token);
        return purchaseService.buyPost(postId,username);
    }

    @GetMapping("/purchases")
    public ResponseEntity<?> getAllPurchases(HttpServletRequest request,
                                             @RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size) {
        String token = request.getHeader("Authorization").substring(7);
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }
        String username = jwtUtils.getUserNameFromJwtToken(token);
        return purchaseService.getAllPurchases(username, page, size);
    }

}
