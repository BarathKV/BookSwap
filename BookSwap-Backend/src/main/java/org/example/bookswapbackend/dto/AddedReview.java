package org.example.bookswapbackend.dto;

import lombok.Getter;
import lombok.Setter;
import org.example.bookswapbackend.model.Review;

@Getter
@Setter
public class AddedReview {
    private String reviewText;
    private Review.Stars stars;
}
