import { ReturnHistoryViewComponent } from './book/return-history-view/return-history-view.component';
import { LendBookCopyViewComponent } from './book/lend-book-copy-view/lend-book-copy-view.component';
import { AddBookViewComponent } from './book/add-book-view/add-book-view.component';
import { EditBookViewComponent } from './book/edit-book-view/edit-book-view.component';
import { ReturnBookViewComponent } from './book/return-book-view/return-book-view.component';
import { LendViewComponent } from './book/lend-view/lend-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListViewComponent } from './book/book-list-view/book-list-view.component';

const routes: Routes = [

  { path: 'bookList', component: BookListViewComponent},
  { path: 'lendBook', component: LendViewComponent},
  { path: 'returnBook', component: ReturnBookViewComponent},
  { path: 'returnHistory', component: ReturnHistoryViewComponent},
  { path: 'addBook', component: AddBookViewComponent},
  { path: 'lendBookCopy/:id', component: LendBookCopyViewComponent},
  { path: 'editBook/:id', component: EditBookViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
