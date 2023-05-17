import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  constructor(private router: Router) {}


  goHome = () => {
    this.router.navigateByUrl('');
  };
}
