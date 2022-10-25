import { Person } from './../../model/person';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookCopy } from 'src/app/model/book-copy';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-lend-book-copy-view',
  templateUrl: './lend-book-copy-view.component.html',
  styleUrls: ['./lend-book-copy-view.component.css']
})
export class LendBookCopyViewComponent implements OnInit {


  bookCopies: Iterable<BookCopy> | undefined;
  allPersons: Array<Person> | undefined;
  currentBook:Book= new Book(" "," "," ");
  selectedPerson:Person | undefined;
  selectedExpirationDateText: String= (new Date()).toString();


  constructor(private route: ActivatedRoute,private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
       this.route.paramMap.pipe(switchMap(params =>
        this.bookService.findBook(+params.get('id')!)
    )).subscribe(book=>{this.currentBook=book
    this.bookService.getBookAvailableCopies(this.currentBook).subscribe(copies=>{
      this.bookCopies=copies
      console.log(this.bookCopies)
      this.bookService.getAllPersons().subscribe(persons=>{
        this.allPersons=Array.from(persons)
        this.selectedPerson= this.allPersons.at(0)
      });
    })
    });

  }

  setCurrentPerson(){
    console.log("SET NEW CURRENT PERSON");
    var e = (document.getElementById("PersonsDropdown")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    console.log(sel);
    this.selectedPerson= this.allPersons?.at(sel);
    console.log(`Current Person: ${this.selectedPerson?.name}`);
    console.log(`Current Expiration Date: ${this.selectedExpirationDateText}`);
  }

  refresh(id: number | undefined){
    console.log("Refresh the list.")
    this.bookService.getBookAvailableCopies(this.currentBook).subscribe(copies=>this.bookCopies=copies);
  }



}
