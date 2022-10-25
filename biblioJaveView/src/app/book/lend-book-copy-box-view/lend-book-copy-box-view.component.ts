import { Personbooklend } from './../../model/personbooklend';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookCopy } from 'src/app/model/book-copy';
import { Person } from 'src/app/model/person';
import { BookService } from 'src/app/shared/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lend-book-copy-box-view',
  templateUrl: './lend-book-copy-box-view.component.html',
  styleUrls: ['./lend-book-copy-box-view.component.css']
})
export class LendBookCopyBoxViewComponent implements OnInit {

  @Input()
  curentCopy:BookCopy | undefined;


  @Input()
  selectedPerson:Person | undefined;

  @Input()
  selectedExpirationDateText: String | undefined;


  @Output()
  lendClicked = new EventEmitter<number>();



  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
  }


  lendBookCopy(){
    console.log(`Current Copy: ${this.curentCopy?.id}`);
    console.log(`Current person: ${this.selectedPerson?.name}`);
    console.log(`Current expirationDate: ${this.selectedExpirationDateText}`);
    var test= new Date(this.selectedExpirationDateText!.toString().replace(/-/g, '\/'));
    console.log(`Current expirationDate: ${test}`);
    var newlend: Personbooklend = new Personbooklend(this.curentCopy!,this.selectedPerson!,new Date(), new Date(this.selectedExpirationDateText!.toString().replace(/-/g, '\/')));
    this.bookService.addNewLendCopy(newlend).subscribe(()=>this.lendClicked.emit(this.curentCopy?.id));

  }


}
