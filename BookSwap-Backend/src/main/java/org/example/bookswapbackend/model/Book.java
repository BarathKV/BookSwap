package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "books")
public class Book {

    public enum Condition {
        NEW, USED, DAMAGED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 1, message = "Title cannot be empty")
    private String title;

    @NotNull
    @Size(min = 1, message = "Author cannot be empty")
    private String author;

    @NotNull
    @Size(min = 13, max = 13, message = "ISBN must be exactly 13 characters")
    private String isbn;

    @Enumerated(EnumType.STRING)
    @Column(name="`condition`")
    private Condition condition;

    @Column(nullable = false)
    private Long price;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private Customer owner;

    private LocalDateTime createdAt = LocalDateTime.now();
}
