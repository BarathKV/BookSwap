package org.example.bookswapbackend.dao;

import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.model.Post;
import org.example.bookswapbackend.model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("SELECT r FROM Review r WHERE r.post = ?1 AND r.user = ?2")
    Review findByBookAndCustomer(Post post, Customer customer);

    @Query("SELECT r FROM Review r WHERE r.user = ?1")
    Page<Review> findByCustomer(String customerId, Pageable pageable);

    @Query("SELECT r FROM Review r WHERE r.writer = ?1")
    Page<Review> findByWriter(String writerId, Pageable pageable);

    @Query("SELECT r FROM Review r WHERE r.post.postId = ?1")
    Review findByPostId(int postId);
}