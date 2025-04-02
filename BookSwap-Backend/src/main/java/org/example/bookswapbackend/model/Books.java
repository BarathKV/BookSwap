package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@Entity
public class Books {

    private enum Condition {
        NEW,
        USED,
        DAMAGED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long book_id;

    private String title;

    private String author;

    @Length(max = 13,min= 13 , message="ISBN must be equal to 13 characters")
    private String ISBN;

    private Condition condition;

    @Column(nullable = false)
    private Long price;
}
