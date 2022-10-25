import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCopyViewComponent } from './book-copy-view.component';

describe('BookCopyViewComponent', () => {
  let component: BookCopyViewComponent;
  let fixture: ComponentFixture<BookCopyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCopyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCopyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
