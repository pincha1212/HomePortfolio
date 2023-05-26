import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

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
