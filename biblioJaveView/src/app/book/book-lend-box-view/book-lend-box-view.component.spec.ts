import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLendBoxViewComponent } from './book-lend-box-view.component';

describe('BookLendBoxViewComponent', () => {
  let component: BookLendBoxViewComponent;
  let fixture: ComponentFixture<BookLendBoxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLendBoxViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLendBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
