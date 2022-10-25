import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnHistoryViewComponent } from './return-history-view.component';

describe('ReturnHistoryViewComponent', () => {
  let component: ReturnHistoryViewComponent;
  let fixture: ComponentFixture<ReturnHistoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnHistoryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
