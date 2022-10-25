import { Author } from './../../model/author';
import { BookCopy } from './../../model/book-copy';
import { Book } from 'src/app/model/book';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-edit-book-view',
  templateUrl: './edit-book-view.component.html',
  styleUrls: ['./edit-book-view.component.css']
})

export class EditBookViewComponent implements OnInit {


  currentBook:Book= new Book(" "," "," ");
  bookAuthors: Iterable<Author> | undefined;
  bookCopies: Iterable<BookCopy> | undefined;


  constructor(private route: ActivatedRoute, private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    console.log("INIT EDIT");
       this.route.paramMap.pipe(switchMap(params =>
        this.bookService.findBook(+params.get('id')!)
    )).subscribe(book=>{this.currentBook=book
    this.bookService.getBookAvailableCopies(this.currentBook).subscribe(copies=>{
      this.bookCopies=copies
      console.log(this.bookCopies)
      this.bookService.getAllBookAuthors(this.currentBook).subscribe(authors=>{
        this.bookAuthors=authors
      })
    })
    });
  }

  completeEditBook(){
    console.log("FINISH EDIT");
    this.bookService.editBook(this.currentBook).subscribe(()=>
    this.router.navigate(["/bookList"])
    );
  }

  addCopy(){
    console.log("FINISH Add copy");
    this.bookService.addBookCopy(this.currentBook).subscribe(()=>{
      this.bookService.getBookCopies(this.currentBook).subscribe(copies=>{
        this.bookCopies=copies
        console.log(this.bookCopies)
      })
    });
  }

  refresh(id: number | undefined){
    console.log("Refresh the list.")
    this.bookService.getBookAvailableCopies(this.currentBook).subscribe(
      copies=>{this.bookCopies=copies
      console.log(copies)
      }
      );

  }

}
