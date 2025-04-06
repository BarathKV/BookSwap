package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "reviews",indexes = {
        @Index(name = "idx_review_user", columnList = "user"),
        @Index(name = "idx_review_post", columnList = "post"),
        @Index(name = "idx_review_writer", columnList = "writer")
})
public class Review {

    public enum Stars {
        ONE, TWO, THREE, FOUR, FIVE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id", nullable = false, unique = true)
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "username", nullable = false,
            foreignKey = @ForeignKey(name = "fk_review_user"))
    private Customer user;

    @OneToOne
    @JoinColumn(name = "post", referencedColumnName = "post_id", nullable = false,
            foreignKey = @ForeignKey(name = "fk_review_post"))
    private Post post;

    @ManyToOne
    @JoinColumn(name = "writer", referencedColumnName = "username", nullable = false,
            foreignKey = @ForeignKey(name = "fk_review_writer"))
    private Customer writer;

    private String reviewText;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "stars")
    private Stars stars;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime writtenAt;
}
