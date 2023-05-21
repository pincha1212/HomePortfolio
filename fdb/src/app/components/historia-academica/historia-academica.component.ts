import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia-academica',
  templateUrl: './historia-academica.component.html',
  styleUrls: ['./historia-academica.component.css']
})
export class HistoriaAcademicaComponent {
  constructor(private router: Router) {}
  goHome = () => {
    this.router.navigateByUrl('');
  };
}
