import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalHandlerComponentComponent } from './vertical-handler-component.component';

describe('VerticalHandlerComponentComponent', () => {
  let component: VerticalHandlerComponentComponent;
  let fixture: ComponentFixture<VerticalHandlerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalHandlerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalHandlerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
