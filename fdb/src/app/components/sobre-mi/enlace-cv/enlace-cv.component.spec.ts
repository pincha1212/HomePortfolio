import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceCvComponent } from './enlace-cv.component';

describe('EnlaceCvComponent', () => {
  let component: EnlaceCvComponent;
  let fixture: ComponentFixture<EnlaceCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlaceCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlaceCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
