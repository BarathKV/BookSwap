package org.example.bookswapbackend.dao;

import jakarta.validation.constraints.Size;
import org.example.bookswapbackend.model.Book;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT b FROM Book b WHERE b.isbn = :isbn")
    Book findByIsbn(@Size(min = 13, max = 13, message = "ISBN must be exactly 13 characters") String isbn);
}
