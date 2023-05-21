import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titulo4Component } from './titulo4.component';

describe('Titulo4Component', () => {
  let component: Titulo4Component;
  let fixture: ComponentFixture<Titulo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Titulo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titulo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
