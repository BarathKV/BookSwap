package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Review {
    public enum Stars {
        ONE,
        TWO,
        THREE,
        FOUR,
        FIVE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long review_id;
    private String username;
    private String writer_name;
    private String review;
    private Stars stars;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date written_at;
}
