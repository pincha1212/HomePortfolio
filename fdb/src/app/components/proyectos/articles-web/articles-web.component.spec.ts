import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesWebComponent } from './articles-web.component';

describe('ArticlesWebComponent', () => {
  let component: ArticlesWebComponent;
  let fixture: ComponentFixture<ArticlesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
