package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Post {

    public enum Condition {
        NEW, USED, DAMAGED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long post_id;

    @OneToOne
    @JoinColumn(name = "book_id", referencedColumnName = "book_id")
    private Book book_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "username")
    private Customer user_id;

    @Enumerated(EnumType.STRING)
    @Column(name = "`condition`",nullable = false)
    private Condition condition;

    @Column(nullable = false)
    private Long price;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
