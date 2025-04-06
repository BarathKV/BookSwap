package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "purchases")
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "purchase_id", nullable = false, unique = true)
    private Long purchaseId;

    @OneToOne
    @JoinColumn(name = "post", referencedColumnName = "post_id", nullable = false,
            foreignKey = @ForeignKey(name = "fk_post_purchase"))
    private Post post;

    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "username", nullable = false,
            foreignKey = @ForeignKey(name = "fk_user_purchase"))
    private Customer user;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime purchasedAt;
}
