import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesSocialesComponent } from './enlaces-sociales.component';

describe('EnlacesSocialesComponent', () => {
  let component: EnlacesSocialesComponent;
  let fixture: ComponentFixture<EnlacesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
