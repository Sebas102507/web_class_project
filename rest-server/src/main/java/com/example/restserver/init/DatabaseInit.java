package com.example.restserver.init;
import java.lang.reflect.Array;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.restserver.model.Author;
import com.example.restserver.model.AuthorByBook;
import com.example.restserver.model.Book;
import com.example.restserver.model.BookCopy;
import com.example.restserver.model.Person;
import com.example.restserver.repository.AuthorByBookRepository;
import com.example.restserver.repository.AuthorRepository;
import com.example.restserver.repository.BookCopyRepository;
import com.example.restserver.repository.BookRepository;
import com.example.restserver.repository.PersonRepository;

@Component
public class DatabaseInit implements ApplicationRunner{

    @Autowired
    BookRepository bookRepository;

    @Autowired
    BookCopyRepository bookCopyRepository;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    AuthorByBookRepository authorByBookRepository;

    @Autowired
    PersonRepository personRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {


        List<Person> persons= Arrays.asList(
            new Person("Person1"),
            new Person("Person2"),
            new Person("Person3"),
            new Person("Person4"),
            new Person("Person5"),
            new Person("Person6"),
            new Person("Person7"),
            new Person("Person8"),
            new Person("Person9"),
            new Person("Person10")
        );


        for (Person person: persons){
            personRepository.save(person);
        }


        List<Author> authors= Arrays.asList(
            new Author("Author1"),
            new Author("Author2"),
            new Author("Author3"),
            new Author("Author4"),
            new Author("Author5")
        );


        for (Author auth: authors){
            authorRepository.save(auth);
        }



        List<Book> books= Arrays.asList(
        new Book("Book100", "isbn1", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"),
        new Book("Book101", "isbn2", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"),
        new Book("Book102", "isbn3", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"),
        new Book("Book103", "isbn4", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"),
        new Book("Book104", "isbn5", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"),
        new Book("Book105", "isbn6", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"),
        new Book("Book106", "isbn7", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"),
        new Book("Book107", "isbn8", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"),
        new Book("Book108", "isbn9", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg")
        );

        for (Book b: books){
            bookRepository.save(b);
            AuthorByBook authorByBook= new AuthorByBook(b,authors.get(0));
            AuthorByBook authorByBook2= new AuthorByBook(b,authors.get(1));
            authorByBookRepository.save(authorByBook);
            authorByBookRepository.save(authorByBook2);
            for (int i=0; i<6; i++){
                BookCopy newCopy= new BookCopy(b,LocalDateTime.now());
                bookCopyRepository.save(newCopy);
                b.getCopies().add(newCopy);
            }
        }


        // bookRepository.save(book1);
        // bookCopyRepository.save(new BookCopy(book1));
    }
    
}


// bookRepository.save(new Book("Book100", "isbn1", "author1, author2", "https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"));
//         bookRepository.save(new Book("Book101", "isbn2", "author1, author2","https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"));
//         bookRepository.save(new Book("Book102", "isbn3", "author1, author2","https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"));
//         bookRepository.save(new Book("Book103", "isbn4", "author1, author2","https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"));
//         bookRepository.save(new Book("Book104", "isbn5", "author1, author2","https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"));
//         bookRepository.save(new Book("Book105", "isbn6", "author1, author2","https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"));
//         bookRepository.save(new Book("Book106", "isbn7", "author1, author2","https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"));
//         bookRepository.save(new Book("Book107", "isbn8", "author1, author2","https://kbimages1-a.akamaihd.net/54a4b628-b12d-4d4c-88be-44ad83af4ce0/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"));