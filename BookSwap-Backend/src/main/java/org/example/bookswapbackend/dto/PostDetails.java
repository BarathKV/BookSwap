package org.example.bookswapbackend.dto;

import lombok.Getter;
import lombok.Setter;
import org.example.bookswapbackend.model.Post;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostDetails {
    private String title;
    private String author;
    private String isbn;
    private Post.Condition condition;
    private Long price;
    private String location;
    private LocalDateTime createdAt;

    public PostDetails(String title, String author, String isbn, Post.Condition condition, Long price, String location, LocalDateTime createdAt) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.condition = condition;
        this.price = price;
        this.location = location;
        this.createdAt = createdAt;
    }
}
