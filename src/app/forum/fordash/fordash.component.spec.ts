import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordashComponent } from './fordash.component';

describe('FordashComponent', () => {
  let component: FordashComponent;
  let fixture: ComponentFixture<FordashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FordashComponent]
    });
    fixture = TestBed.createComponent(FordashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
