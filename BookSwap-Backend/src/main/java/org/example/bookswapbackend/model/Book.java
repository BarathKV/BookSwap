package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id", nullable = false, unique = true)
    private Long bookId;

    @Column(nullable = false, unique = true)
    @Size(min = 1, message = "Title cannot be empty")
    private String title;

    @NotNull
    @Size(min = 1, message = "Author cannot be empty")
    private String author;

    @Column(nullable = false, unique = true, length = 13)
    @Size(min = 13, max = 13, message = "ISBN must be exactly 13 characters")
    private String isbn;
}
