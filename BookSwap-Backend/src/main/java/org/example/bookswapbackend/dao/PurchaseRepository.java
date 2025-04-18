package org.example.bookswapbackend.dao;

import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.model.Post;
import org.example.bookswapbackend.model.Purchase;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {

    @Query("SELECT p FROM Purchase p WHERE p.user.username = ?1")
    List<Purchase> findByCustomerUsername(String customer, Pageable pageable);

    @Query("SELECT p FROM Purchase p WHERE p.post.postId = ?1 AND p.user.username = ?2")
    Purchase findByBuyerAndPost(Post post, Customer user);
}
