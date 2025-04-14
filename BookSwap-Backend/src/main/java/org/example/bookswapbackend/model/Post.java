package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "posts",indexes = {
        @Index(name = "idx_post_user", columnList = "user"),
        @Index(name = "idx_post_book", columnList = "book")
})
public class Post {

    public enum Condition {
        NEW, USED, DAMAGED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id", nullable = false, unique = true)
    private Long postId;

    @ManyToOne
    @JoinColumn(name = "book", referencedColumnName = "book_id", nullable = false,
            foreignKey = @ForeignKey(name = "fk_post_book"))
    private Book book;

    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "username", nullable = false,
            foreignKey = @ForeignKey(name = "fk_post_user"))
    private Customer user;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "`condition`", nullable = false)
    private Condition condition;

    @Column(nullable = false)
    private Float price;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "image_file", length = 100)
    private String imageFile;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
