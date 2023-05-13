import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMovilesComponent } from './menu-moviles.component';

describe('MenuMovilesComponent', () => {
  let component: MenuMovilesComponent;
  let fixture: ComponentFixture<MenuMovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
