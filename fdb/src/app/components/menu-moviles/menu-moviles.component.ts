import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-moviles',
  templateUrl: './menu-moviles.component.html',
  styleUrls: ['./menu-moviles.component.css']
})
export class MenuMovilesComponent {
  constructor(private router: Router) {}

  goHome = () => {
    this.router.navigateByUrl('');
  };
  btnClick = () => {
    this.router.navigateByUrl('/sobre-mi');
  };
  btnClick2 = () => {
    this.router.navigateByUrl('/habilidades');
  };
  btnClick3 = () => {
    this.router.navigateByUrl('/proyectos');
  };

  btnClick4 = () => {
    this.router.navigateByUrl('/menu-moviles');
  }

  btnClick5 = () => {
    this.router.navigateByUrl('/historia-academica');
  }
  btnClick6 = () => {
    this.router.navigateByUrl('/contactame');
  }


}
