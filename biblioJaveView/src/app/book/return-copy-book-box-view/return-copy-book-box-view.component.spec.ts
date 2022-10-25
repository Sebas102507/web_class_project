import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCopyBookBoxViewComponent } from './return-copy-book-box-view.component';

describe('ReturnCopyBookBoxViewComponent', () => {
  let component: ReturnCopyBookBoxViewComponent;
  let fixture: ComponentFixture<ReturnCopyBookBoxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnCopyBookBoxViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnCopyBookBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
