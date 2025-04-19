package org.example.bookswapbackend.dto;

import lombok.Getter;
import lombok.Setter;
import org.example.bookswapbackend.model.Post;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostDetails {
    private Long postId;
    private String title;
    private String author;
    private String isbn;
    private Post.Condition condition;
    private Float price;
    private String location;
    private LocalDateTime createdAt;
    private String imageFile;

    public PostDetails(Long postId,
            String title, String author, String isbn, Post.Condition condition, Float price, String location,
            LocalDateTime createdAt, String imageFile) {
        this.postId = postId;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.condition = condition;
        this.price = price;
        this.location = location;
        this.createdAt = createdAt;
        this.imageFile = imageFile;
    }
}
