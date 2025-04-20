package org.example.bookswapbackend.dao;

import org.example.bookswapbackend.model.Favorite;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    // Check if a favorite exists by customer and post
    @Query("SELECT CASE WHEN COUNT(f) > 0 THEN true ELSE false END FROM Favorite f WHERE f.post.postId = ?1 AND f.customer.username = ?2")
    boolean existsByCustomerAndPost(long postId, String username);


    // Find a favorite by customer and post
    @Query("SELECT f FROM Favorite f WHERE f.post.postId = ?1 AND f.customer.username = ?2")
    Optional<Favorite> findByPostIdAndUser(long postId, String username);

    @Query("SELECT f FROM Favorite f WHERE f.customer.username = ?1")
    Page<Favorite> findByCustomer(String username, Pageable pageable);
}
