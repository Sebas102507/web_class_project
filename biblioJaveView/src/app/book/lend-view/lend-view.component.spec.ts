import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendViewComponent } from './lend-view.component';

describe('LendViewComponent', () => {
  let component: LendViewComponent;
  let fixture: ComponentFixture<LendViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LendViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
