package org.example.bookswapbackend.dao;

import java.util.Optional;

import org.example.bookswapbackend.dto.PostDetails;
import org.example.bookswapbackend.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>, JpaSpecificationExecutor<Post> {
        @Query("SELECT new org.example.bookswapbackend.dto.PostDetails(p.postId,b.title, b.author, b.isbn, p.condition, p.price, c.location, p.createdAt,p.imageFile) "
                        +
                        "FROM Post p " +
                        "JOIN p.book b " +
                        "JOIN p.user c " +
                        "WHERE p.user.username = :userId")
        Page<PostDetails> findByUserId(String userId, Pageable pageable);

        @Query("SELECT COUNT(u) FROM Customer u WHERE u.username = :username")
        long countUsersByStatus(@Param("username") String username);

        @Query("SELECT new org.example.bookswapbackend.dto.PostDetails(p.postId,b.title, b.author, b.isbn, p.condition, p.price, c.location, p.createdAt,p.imageFile) "
                        +
                        "FROM Post p " +
                        "JOIN p.book b " +
                        "JOIN p.user c " +
                        "ORDER BY p.createdAt DESC")
        Page<PostDetails> findRecent(Pageable pageable);

        @Query("SELECT new org.example.bookswapbackend.dto.PostDetails(p.postId,b.title, b.author, b.isbn, p.condition, p.price, c.location, p.createdAt,p.imageFile) "
                        +
                        "FROM Post p " +
                        "JOIN p.book b " +
                        "JOIN p.user c " +
                        "WHERE b.title LIKE %:title%")
        Page<PostDetails> findByTitleContaining(String title, Pageable pageable);

        @Query("SELECT new org.example.bookswapbackend.dto.PostDetails(p.postId,b.title, b.author, b.isbn, p.condition, p.price, c.location, p.createdAt,p.imageFile) "
                        +
                        "FROM Post p " +
                        "JOIN p.book b " +
                        "JOIN p.user c " +
                        "WHERE b.author LIKE %:userId%")
        Page<PostDetails> findByAuthorContaining(String userId, Pageable pageable);

        @Query("SELECT new org.example.bookswapbackend.dto.PostDetails(p.postId,b.title, b.author, b.isbn, p.condition, p.price, c.location, p.createdAt,p.imageFile) "
                        +
                        "FROM Post p " +
                        "JOIN p.book b " +
                        "JOIN p.user c " +
                        "WHERE b.isbn = :isbn")
        Page<PostDetails> findByISBN(String isbn, Pageable pageable);

        @Query("SELECT new org.example.bookswapbackend.dto.PostDetails(p.postId,b.title, b.author, b.isbn, p.condition, p.price, c.location, p.createdAt,p.imageFile) "
                        +
                        "FROM Post p " +
                        "JOIN p.book b " +
                        "JOIN p.user c " +
                        "WHERE c.location LIKE %:location%")
        Page<PostDetails> findByLocation(@Param("location") String location, Pageable pageable);

        @Query("SELECT new org.example.bookswapbackend.dto.PostDetails(p.postId,b.title, b.author, b.isbn, p.condition, p.price, c.location, p.createdAt,p.imageFile)"
                        +
                        "FROM Post p " +
                        "JOIN p.book b " +
                        "JOIN p.user c ")
        Page<PostDetails> findAll(Specification<Post> spec, Pageable pageable, Class<PostDetails> postDetailsClass);

}
