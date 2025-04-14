package org.example.bookswapbackend.dto;

import lombok.Getter;
import lombok.Setter;
import org.example.bookswapbackend.model.Post;

@Getter
@Setter
public class NewPost {
    private String title;
    private String author;
    private String isbn;
    private Post.Condition condition;
    private Float price;
    private String description;
    private String imageFile;

    public NewPost(String title, String author, String isbn, Post.Condition condition, Float price,
                   String description, String imageFile) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.condition = condition;
        this.price = price;
        this.description = description;
        this.imageFile = imageFile;
    }
}
