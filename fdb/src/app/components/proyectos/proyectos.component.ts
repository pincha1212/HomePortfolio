import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(private router: Router) {}

  goHome = () => {
    this.router.navigateByUrl('');
  };
  goPorfolio = () => {
    this.router.navigateByUrl('/portafolio-web');
  };
}
