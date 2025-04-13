package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.CustomerRepository;
import org.example.bookswapbackend.dao.FavoriteRepository;
import org.example.bookswapbackend.dao.PostRepository;
import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.model.Favorite;
import org.example.bookswapbackend.model.Post;
import org.example.bookswapbackend.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FavoriteService {

    @Autowired
    FavoriteRepository favRepo;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    CustomerRepository custRepo;

    @Autowired
    PostRepository postRepo;

    public ResponseEntity<?> addFavorite(int postId, String token) {
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }

        String username = jwtUtils.getUserNameFromJwtToken(token);
        if (username == null || username.isEmpty()) {
            return ResponseEntity.badRequest().body("Username not found in token");
        }
        if (postId <= 0) {
            return ResponseEntity.badRequest().body("Invalid post ID");
        }
        if (favRepo.existsByCustomerAndPost(postId, username)) {
            return ResponseEntity.badRequest().body("Already favorited");
        }
        Favorite favorite = new Favorite();
        Optional<Customer> customer = custRepo.findById(username);
        if (customer.isEmpty()) {
            return ResponseEntity.badRequest().body("Customer not found");
        }
        Optional<Post> post = postRepo.findById((long) postId);
        if (post.isEmpty()) {
            return ResponseEntity.badRequest().body("Post not found");
        }
        favorite.setCustomer(customer.get());
        favorite.setPost(post.get());
        Favorite savedFavorite = favRepo.save(favorite);
        return ResponseEntity.ok(savedFavorite);
    }

    public ResponseEntity<?> removeFavorite(int postId, String token) {
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }
        String username = jwtUtils.getUserNameFromJwtToken(token);
        if (username == null || username.isEmpty()) {
            return ResponseEntity.badRequest().body("Username not found in token");
        }
        Optional<Favorite> favorite = favRepo.findByPostIdAndUser(postId, username);
        if (favorite.isPresent()) {
            favRepo.delete(favorite.get());
            return ResponseEntity.ok("Favorite removed successfully");
        } else {
            return ResponseEntity.badRequest().body("Favorite not found");
        }

    }

    public ResponseEntity<?> isFavorite(int postId, String token) {
        if (!jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.badRequest().body("Invalid JWT token");
        }
        String username = jwtUtils.getUserNameFromJwtToken(token);
        if (username == null || username.isEmpty()) {
            return ResponseEntity.badRequest().body("Username not found in token");
        }
        if (postId <= 0) {
            return ResponseEntity.badRequest().body("Invalid post ID");
        }
        boolean isFavorite = favRepo.existsByCustomerAndPost(postId, username);
        return ResponseEntity.ok(isFavorite);
    }
}
