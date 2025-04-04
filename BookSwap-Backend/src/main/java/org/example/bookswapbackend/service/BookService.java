package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.BookRepository;
import org.example.bookswapbackend.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    BookRepository bookRepo;

    public ResponseEntity<?> addBook(Book book) {
        if (book.getTitle() == null || book.getTitle().isEmpty()) {
            return ResponseEntity.badRequest().body("Book title must not be null or empty");
        }
        if (book.getAuthor() == null || book.getAuthor().isEmpty()) {
            return ResponseEntity.badRequest().body("Book author must not be null or empty");
        }
        if (book.getIsbn() == null || book.getIsbn().length() != 13) {
            return ResponseEntity.badRequest().body("Book ISBN must be exactly 13 characters");
        }
        Optional<Book> existingBook = Optional.ofNullable(bookRepo.findByIsbn(book.getIsbn()));
        if (existingBook.isPresent()) {
            return ResponseEntity.badRequest().body("Book with this ISBN already exists");
        }
        Book savedBook = bookRepo.save(book);
        return ResponseEntity.ok(savedBook);
    }

    public ResponseEntity<?> getBookByIsbn(String isbn) {
        Optional<Book> book = Optional.ofNullable(bookRepo.findByIsbn(isbn));
        if (book.isPresent()) {
            return ResponseEntity.ok(book.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<?> getBooksByTitle(String title, int page, int size) {
        if (title == null || title.isEmpty()) {
            return ResponseEntity.badRequest().body("Book title must not be null or empty");
        }
        Pageable pageable = Pageable.ofSize(size).withPage(page);
        List<Book> books = bookRepo.findBooksByTitleLike(title, pageable);
        if (!books.isEmpty()) {
            return ResponseEntity.ok(books);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public Book savebook(Book book) {
        return bookRepo.save(book);
    }

    public ResponseEntity<?> getBooksByAuthor(String author, int page, int size) {
        if (author == null || author.isEmpty()) {
            return ResponseEntity.badRequest().body("Book author must not be null or empty");
        }
        Pageable pageable = Pageable.ofSize(size).withPage(page);
        List<Book> books = bookRepo.findBooksByAuthorLike(author, pageable);
        if (!books.isEmpty()) {
            return ResponseEntity.ok(books);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
