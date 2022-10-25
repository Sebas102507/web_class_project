import { Book } from 'src/app/model/book';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {


  @Input()
  currentBook:Book | undefined;

  @Output()
  deleteClicked = new EventEmitter<number>();

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }


  edit() {
    this.router.navigate([`editBook/${this.currentBook?.id}`]);
}


  deleteBook(){
    this.bookService.deleteBook(this.currentBook!.id!).subscribe(()=>this.deleteClicked.emit(this.currentBook?.id));
  }

}
