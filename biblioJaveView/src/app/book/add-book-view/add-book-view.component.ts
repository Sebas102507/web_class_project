import { Authorbybook } from './../../model/authorbybook';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/shared/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book-view',
  templateUrl: './add-book-view.component.html',
  styleUrls: ['./add-book-view.component.css']
})
export class AddBookViewComponent implements OnInit {


  currentBook: Book = new Book("","","");
  authors: Array<Author> | undefined;
  selectedAuthors: Set<Author> = new Set<Author>();

  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAllAuthors().subscribe(aths=>{
      this.authors= Array.from(aths);
      console.log(this.authors);
    });
  }


  addAuthor(){
    var e = (document.getElementById("AuthorDropdown")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    console.log(sel);
    console.log(this.authors?.at(sel));
    this.selectedAuthors.add(this.authors?.at(sel)!);
    console.log(this.selectedAuthors);
  }


  removeAuthor(author:Author){
    this.selectedAuthors.delete(author);
  }


  addNewBook(){
    if(this.selectedAuthors.size>0){
      this.bookService.addBook(this.currentBook).pipe(
        switchMap((bookAdded:Book)=>
        this.bookService.addAuthorByBook(this.selectedAuthors,bookAdded.id!)
        )).subscribe(_=>this.router.navigate(["/bookList"]));
    }
  }


}
