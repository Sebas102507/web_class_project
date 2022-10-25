import { Personbooklend } from './../../model/personbooklend';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-return-book-view',
  templateUrl: './return-book-view.component.html',
  styleUrls: ['./return-book-view.component.css']
})
export class ReturnBookViewComponent implements OnInit {


  currentLends: Iterable<Personbooklend> | undefined;


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllLends().subscribe(lends=>this.currentLends=lends);
  }



  refresh(id: number | undefined){
    console.log("Refresh the list.")
    this.bookService.getAllLends().subscribe(lends=>this.currentLends=lends);
  }


}
