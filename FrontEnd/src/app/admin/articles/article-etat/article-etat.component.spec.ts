import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEtatComponent } from './article-etat.component';

describe('ArticleEtatComponent', () => {
  let component: ArticleEtatComponent;
  let fixture: ComponentFixture<ArticleEtatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleEtatComponent]
    });
    fixture = TestBed.createComponent(ArticleEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
