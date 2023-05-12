import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titulo3Component } from './titulo3.component';

describe('Titulo3Component', () => {
  let component: Titulo3Component;
  let fixture: ComponentFixture<Titulo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Titulo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titulo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
