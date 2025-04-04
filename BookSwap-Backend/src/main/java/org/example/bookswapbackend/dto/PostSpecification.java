package org.example.bookswapbackend.dto;
import org.example.bookswapbackend.model.Post;
import org.springframework.data.jpa.domain.Specification;

public class PostSpecification {

    public static Specification<Post> hasTitle(String title) {
        return (root, query, builder) ->
                title == null ? null : builder.like(root.get("book").get("title"), "%" + title + "%");
    }

    public static Specification<Post> hasAuthor(String author) {
        return (root, query, builder) ->
                author == null ? null : builder.like(root.get("book").get("author"), "%" + author + "%");
    }

    public static Specification<Post> hasCondition(Post.Condition condition) {
        return (root, query, builder) ->
                condition == null ? null : builder.equal(root.get("condition"), condition);
    }

    public static Specification<Post> hasPriceLessThan(Long price) {
        return (root, query, builder) ->
                price == null ? null : builder.lessThan(root.get("price"), price);
    }
}
