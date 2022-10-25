import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBookViewComponent } from './return-book-view.component';

describe('ReturnBookViewComponent', () => {
  let component: ReturnBookViewComponent;
  let fixture: ComponentFixture<ReturnBookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnBookViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
