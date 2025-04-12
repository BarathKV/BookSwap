package org.example.bookswapbackend.controller;

import org.example.bookswapbackend.model.Book;
import org.example.bookswapbackend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
//TODO: Change the RequestMapping to /v1/book
//@RequestMapping("api/v1/book")
@RequestMapping("/book")
public class BookController {
    @Autowired
    BookService bookService;

    @GetMapping("/test")
    public String testBook() {
        return "Test Book";
    }

    @PostMapping("/add")
    public ResponseEntity<?> addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @GetMapping("/search/title/{title}")
    public ResponseEntity<?> searchBookByTitle(@PathVariable String title) {
        return bookService.searchBookByTitle(title);
    }
}
