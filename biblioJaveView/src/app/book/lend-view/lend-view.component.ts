import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-lend-view',
  templateUrl: './lend-view.component.html',
  styleUrls: ['./lend-view.component.css']
})
export class LendViewComponent implements OnInit {

  bookDB:Iterable<Book> | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.findAllBooks().subscribe(
      books=>{this.bookDB=books
      console.log(books)
      }
      );
  }

}
