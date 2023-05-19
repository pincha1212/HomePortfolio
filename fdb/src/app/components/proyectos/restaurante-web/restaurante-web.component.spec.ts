import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteWebComponent } from './restaurante-web.component';

describe('RestauranteWebComponent', () => {
  let component: RestauranteWebComponent;
  let fixture: ComponentFixture<RestauranteWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
