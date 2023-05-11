import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  constructor(private router: Router) {}

  goHome = () => {
    this.router.navigateByUrl('');
  };
  
  showInfo = false;
  showMusic = false;
  
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
  

  toggleMusic() {
    this.showMusic =!this.showMusic;
  }

  
}
