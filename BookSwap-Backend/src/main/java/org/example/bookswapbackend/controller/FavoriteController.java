package org.example.bookswapbackend.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.example.bookswapbackend.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/api/favorites")
@RequestMapping("/fav")
public class FavoriteController {
    @Autowired
    FavoriteService favService;

    @PostMapping("/add")
    public ResponseEntity<?> addFavorite(HttpServletRequest request, @RequestParam int postId) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }
        String token = authHeader.substring(7);
        return favService.addFavorite(postId, token);
    }

    @PostMapping("/remove")
    public ResponseEntity<?> removeFavorite(HttpServletRequest request, @RequestParam int postId) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }
        String token = authHeader.substring(7);
        return favService.removeFavorite(postId, token);
    }

    @GetMapping("/iffav")
    public ResponseEntity<?> isFavorite(HttpServletRequest request, @RequestParam int postId) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }
        String token = authHeader.substring(7);
        return favService.isFavorite(postId, token);
    }
}
