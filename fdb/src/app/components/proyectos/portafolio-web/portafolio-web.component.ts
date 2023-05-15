import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio-web',
  templateUrl: './portafolio-web.component.html',
  styleUrls: ['./portafolio-web.component.css']
})
export class PortafolioWebComponent {
  constructor(private router: Router) {}

  goPRoyectos = () => {
    this.router.navigateByUrl('/proyectos');
  };
}
