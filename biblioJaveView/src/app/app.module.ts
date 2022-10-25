import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalHandlerComponentComponent } from './book/vertical-handler-component/vertical-handler-component.component';
import { BookListViewComponent } from './book/book-list-view/book-list-view.component';
import { BookViewComponent } from './book/book-view/book-view.component';
import {HttpClientModule} from '@angular/common/http'; // Permite comunicarse a través de hhtp con otros computadores
import { LendViewComponent } from './book/lend-view/lend-view.component';
import { ReturnBookViewComponent } from './book/return-book-view/return-book-view.component';
import { FormsModule } from '@angular/forms';
import { EditBookViewComponent } from './book/edit-book-view/edit-book-view.component';
import { BookCopyViewComponent } from './book/book-copy-view/book-copy-view.component';
import { AddBookViewComponent } from './book/add-book-view/add-book-view.component';
import { BookLendBoxViewComponent } from './book/book-lend-box-view/book-lend-box-view.component';
import { LendBookCopyViewComponent } from './book/lend-book-copy-view/lend-book-copy-view.component';
import { LendBookCopyBoxViewComponent } from './book/lend-book-copy-box-view/lend-book-copy-box-view.component';
import { ReturnHistoryViewComponent } from './book/return-history-view/return-history-view.component';
import { ReturnCopyBookBoxViewComponent } from './book/return-copy-book-box-view/return-copy-book-box-view.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalHandlerComponentComponent,
    BookListViewComponent,
    BookViewComponent,
    LendViewComponent,
    ReturnBookViewComponent,
    EditBookViewComponent,
    BookCopyViewComponent,
    AddBookViewComponent,
    BookLendBoxViewComponent,
    LendBookCopyViewComponent,
    LendBookCopyBoxViewComponent,
    ReturnHistoryViewComponent,
    ReturnCopyBookBoxViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
