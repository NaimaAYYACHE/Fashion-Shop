import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelComponent } from './del.component';

describe('DelComponent', () => {
  let component: DelComponent;
  let fixture: ComponentFixture<DelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelComponent]
    });
    fixture = TestBed.createComponent(DelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
