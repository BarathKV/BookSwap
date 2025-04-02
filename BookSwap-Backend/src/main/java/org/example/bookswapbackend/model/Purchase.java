package org.example.bookswapbackend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long purchase_id;

    private Long book_id;

    private Long user_id;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date purchased_at;
}
