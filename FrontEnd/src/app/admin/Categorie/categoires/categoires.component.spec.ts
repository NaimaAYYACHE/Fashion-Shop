import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoiresComponent } from './categoires.component';

describe('CategoiresComponent', () => {
  let component: CategoiresComponent;
  let fixture: ComponentFixture<CategoiresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoiresComponent]
    });
    fixture = TestBed.createComponent(CategoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
