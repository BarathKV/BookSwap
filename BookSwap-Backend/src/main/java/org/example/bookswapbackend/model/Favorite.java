package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "favorites", indexes = {
        @Index(name = "idx_favorite_user", columnList = "user"),
        @Index(name = "idx_favorite_post", columnList = "post")})
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "favorite_id", nullable = false, unique = true)
    private Long favoriteId;

    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "username", nullable = false,
            foreignKey = @ForeignKey(name = "fk_favorite_user"))
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "post", referencedColumnName = "post_id", nullable = false,
            foreignKey = @ForeignKey(name = "fk_favorite_post"))
    private Post post;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime addedAt;
}
