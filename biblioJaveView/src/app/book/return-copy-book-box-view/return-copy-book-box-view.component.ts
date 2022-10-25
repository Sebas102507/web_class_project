import { Personbooklend } from './../../model/personbooklend';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { Personbookreturn } from 'src/app/model/personbookreturn';

@Component({
  selector: 'app-return-copy-book-box-view',
  templateUrl: './return-copy-book-box-view.component.html',
  styleUrls: ['./return-copy-book-box-view.component.css']
})
export class ReturnCopyBookBoxViewComponent implements OnInit {

  @Input()
  currentPersonbooklend:Personbooklend | undefined;


  @Output()
  returnLendClicked = new EventEmitter<number>();


  constructor(private bookService: BookService) { }

  ngOnInit(): void {}


  returnLend(){
    this.bookService.addNewReturn(new Personbookreturn(this.currentPersonbooklend?.copy!,this.currentPersonbooklend?.person!, new Date())).subscribe(_=>{
      this.bookService.deleteLend(this.currentPersonbooklend?.id!).subscribe(_=>this.returnLendClicked.emit(1));
    });
  }


}
