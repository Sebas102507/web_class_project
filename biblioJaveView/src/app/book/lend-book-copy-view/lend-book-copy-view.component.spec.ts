import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendBookCopyViewComponent } from './lend-book-copy-view.component';

describe('LendBookCopyViewComponent', () => {
  let component: LendBookCopyViewComponent;
  let fixture: ComponentFixture<LendBookCopyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendBookCopyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LendBookCopyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
