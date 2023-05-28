import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css'],
  
})
export class ContactameComponent {

  constructor(private router: Router) {}

  goHome = () => {
    this.router.navigateByUrl('');
  };
  
}
