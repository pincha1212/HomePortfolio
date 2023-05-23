import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaFlameworksComponent } from './biblioteca-flameworks.component';

describe('BibliotecaFlameworksComponent', () => {
  let component: BibliotecaFlameworksComponent;
  let fixture: ComponentFixture<BibliotecaFlameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaFlameworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaFlameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
