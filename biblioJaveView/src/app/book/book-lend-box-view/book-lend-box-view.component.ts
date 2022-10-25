import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-lend-box-view',
  templateUrl: './book-lend-box-view.component.html',
  styleUrls: ['./book-lend-box-view.component.css']
})
export class BookLendBoxViewComponent implements OnInit {

  @Input()
  currentBook:Book | undefined;



  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  lendBookCopy() {
    this.router.navigate([`lendBookCopy/${this.currentBook?.id}`]);
}

}
