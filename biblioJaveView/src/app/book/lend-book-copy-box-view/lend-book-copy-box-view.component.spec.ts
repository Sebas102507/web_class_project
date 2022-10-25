import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendBookCopyBoxViewComponent } from './lend-book-copy-box-view.component';

describe('LendBookCopyBoxViewComponent', () => {
  let component: LendBookCopyBoxViewComponent;
  let fixture: ComponentFixture<LendBookCopyBoxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendBookCopyBoxViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LendBookCopyBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
