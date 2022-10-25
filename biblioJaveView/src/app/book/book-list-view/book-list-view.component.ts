import { switchMap } from 'rxjs/operators';
import { BookService } from './../../shared/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.css']
})
export class BookListViewComponent implements OnInit {


  bookDB:Iterable<Book> | undefined;


  constructor(private bookService: BookService) { }


  ngOnInit(): void {
    this.bookService.findAllBooks().subscribe(
      books=>{this.bookDB=books
      console.log(books)
      }
      );
  }


  refresh(id: number | undefined){
    console.log("Refresh the list.")
    this.bookService.findAllBooks().subscribe(
      books=>{this.bookDB=books
      console.log(books)
      }
      );

  }

}
