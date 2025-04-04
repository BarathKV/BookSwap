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

    @GetMapping("/get/isbn/{isbn}")
    public ResponseEntity<?> getBookByIsbn(@PathVariable String isbn) {
        return bookService.getBookByIsbn(isbn);
    }

    @GetMapping("/get/title/{title}")
    public ResponseEntity<?> getBookByTitle(@PathVariable String title,@RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "10") int size) {
        return bookService.getBooksByTitle(title, page, size);
    }

    @GetMapping("/get/author/{author}")
    public ResponseEntity<?> getBookByAuthor(@PathVariable String author,@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size) {
        return bookService.getBooksByAuthor(author, page, size);
    }

    //TODO: Add a method to get books by Location of the seller
}
