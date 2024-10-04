import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatComponent } from './update-cat.component';

describe('UpdateCatComponent', () => {
  let component: UpdateCatComponent;
  let fixture: ComponentFixture<UpdateCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCatComponent]
    });
    fixture = TestBed.createComponent(UpdateCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
