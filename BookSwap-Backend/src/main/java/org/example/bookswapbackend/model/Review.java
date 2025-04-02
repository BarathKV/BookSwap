package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "reviews")
public class Review {

    public enum Stars {
        ONE, TWO, THREE, FOUR, FIVE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_username", nullable = false)
    private Customer customer; // Reviewer

    @ManyToOne
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @ManyToOne
    @JoinColumn(name = "writer", referencedColumnName = "username", nullable = false)
    private Customer writer; // Writer's user

    private String reviewText;

    @Enumerated(EnumType.STRING)
    @Column(name="`stars`")
    private Stars stars;

    @Column(nullable = false, updatable = false)
    private LocalDateTime writtenAt = LocalDateTime.now();
}
