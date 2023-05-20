import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-web',
  templateUrl: './articles-web.component.html',
  styleUrls: ['./articles-web.component.css']
})
export class ArticlesWebComponent {
  constructor(private router: Router) {}

  goPRoyectos = () => {
    this.router.navigateByUrl('/proyectos');
  };
}
