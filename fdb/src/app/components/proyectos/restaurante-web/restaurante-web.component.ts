import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-web',
  templateUrl: './restaurante-web.component.html',
  styleUrls: ['./restaurante-web.component.css']
})
export class RestauranteWebComponent {
  constructor(private router: Router) {}

  goPRoyectos = () => {
    this.router.navigateByUrl('/proyectos');
  };
}
