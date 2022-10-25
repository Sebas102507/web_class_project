import { BookCopy } from './../../model/book-copy';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-book-copy-view',
  templateUrl: './book-copy-view.component.html',
  styleUrls: ['./book-copy-view.component.css']
})
export class BookCopyViewComponent implements OnInit {


  @Input()
  curentCopy:BookCopy | undefined;

  @Output()
  deleteClicked = new EventEmitter<number>();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  deleteCopy(){
    this.bookService.deleteCopy(this.curentCopy!).subscribe(()=>this.deleteClicked.emit(this.curentCopy?.id));
  }

}
