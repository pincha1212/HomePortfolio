import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesComponent } from './lenguajes.component';

describe('LenguajesComponent', () => {
  let component: LenguajesComponent;
  let fixture: ComponentFixture<LenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
