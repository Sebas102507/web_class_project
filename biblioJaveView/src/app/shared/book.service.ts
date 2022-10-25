import { Personbookreturn } from './../model/personbookreturn';
import { Personbooklend } from './../model/personbooklend';
import { Authorbybook } from './../model/authorbybook';
import { BookCopy } from './../model/book-copy';
import { Book } from 'src/app/model/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../model/author';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class BookService {
//http://localhost:9091/book/list

  constructor(private http:HttpClient) { }

  findBook(id:number) : Observable<Book>{
    console.log("THE ID IS: "+id);
    return this.http.get<Book>(`http://localhost:9091/book/list/${id}`);
   }

  findAllBooks() : Observable<Iterable<Book>>{
   return this.http.get<Iterable<Book>>("http://localhost:9091/book/list");
  }

  addBook(book:Book):Observable<Book>{
    return this.http.post<Book>("http://localhost:9091/book/list/newBook",book,{
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      )
    });
   }

   deleteBook(id:number){
    console.log(id);
    return this.http.delete(`http://localhost:9091/book/list/${id}/deleteBook`);
   }

   editBook(book:Book){
    return this.http.put("http://localhost:9091/book/list/editBook",book);
   }


   getBookCopies(book:Book):Observable<Iterable<BookCopy>>{
    return this.http.get<Iterable<BookCopy>>(`http://localhost:9091/book/list/copies/${book.id}`);
   }


   getBookAvailableCopies(book:Book):Observable<Iterable<BookCopy>>{
    return this.http.get<Iterable<BookCopy>>(`http://localhost:9091/book/list/av_copies/${book.id}`);
   }


   addBookCopy(book:Book){
    return this.http.post(`http://localhost:9091/book/list/newCopy/${book.id}`,null);
   }

   deleteCopy(bookCopy: BookCopy){
    return this.http.delete(`http://localhost:9091/book/list/deleteCopy/${bookCopy.id}`);
   }


   getAllAuthors():Observable<Iterable<Author>>{
    return this.http.get<Iterable<Author>>("http://localhost:9091/book/list/authors");
   }



   getAllBookAuthors(book:Book):Observable<Iterable<Author>>{
    return this.http.get<Iterable<Author>>(`http://localhost:9091/book/list/${book.id}/authors`);
   }

   addAuthorByBook(authorsbybook:Set<Author>, bookId:Number){

    console.log(`BOOK ID TO SEND: ${bookId}`);

    console.log(`AUTHORS TO SEND: ${authorsbybook.values}`);

    return this.http.post(`http://localhost:9091/book/list/${bookId}/authorsbybook`,Array.from(authorsbybook.values()),{
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      )
    });

   }



   getAllPersons():Observable<Iterable<Person>>{
    return this.http.get<Iterable<Person>>("http://localhost:9091/book/list/persons");
   }

   addNewLendCopy(personbooklend:Personbooklend){
    return this.http.post("http://localhost:9091/book/list/newlendBookCopy",personbooklend,{
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      )
    });
   }


   getAllLends():Observable<Iterable<Personbooklend>>{
    return this.http.get<Iterable<Personbooklend>>("http://localhost:9091/book/list/lendBookCopy");
   }



   deleteLend(id:number){
    console.log(id);
    return this.http.delete(`http://localhost:9091/book/list/${id}/deletelendBookCopy`);
   }


   addNewReturn(personbookreturn:Personbookreturn){
    return this.http.post("http://localhost:9091/book/list/newReturnBookCopy",personbookreturn,{
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      )
    });
   }



}
