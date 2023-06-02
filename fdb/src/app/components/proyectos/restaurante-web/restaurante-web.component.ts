import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-web',
  templateUrl: './restaurante-web.component.html',
  styleUrls: ['./restaurante-web.component.css']
})
export class RestauranteWebComponent implements OnInit {
  constructor(private router: Router) {}

  goPRoyectos = () => {
    this.router.navigateByUrl('/proyectos');
  };

  ngOnInit(): void {}
  parrafos = [
    {title:'1. Investigación:',subtitle:'Antes de empezar a programar, exploré en internet ejemplos de páginas web de restaurantes que me llamaran la atención, tanto por su diseño como por su usabilidad. también averigüé sobre el contenido que debía incluir, como el menú, las fotos, la dirección, los horarios y las opiniones de los clientes.'},
    {title:'2. planificación:',subtitle:'Una vez que tuve una idea clara de lo que quería, opté por usar angular como framework para desarrollar mi página web, ya que me permite crear componentes reutilizables y dinámicos. quería una página estática que solo cambiara un componente según fuera necesario, como el menú o la galería de fotos.'},
    {title:'3. diseño:',subtitle:'Para el diseño de la página web, usé bootstrap, un conjunto de herramientas que facilitan la creación de interfaces web responsivas y elegantes. me basé en una página web que vi en internet, cuyo diseño se parece mucho al mío. utilicé colores fríos y tipografías clásicas para crear un ambiente sofisticado y profesional.'},
    {title:'4. desarrollo:', subtitle:'Finalmente, me puse manos a la obra y programé mi página web con angular, usando el editor de código visual studio code. creé los componentes necesarios para cada sección de la página, como el encabezado, el pie de página, el menú, la galería y el formulario de contacto. también agregué algunas animaciones y efectos para hacerla más atractiva e interactiva. estoy muy contento del resultado final y espero que les guste mi página web de restaurante con angular.'},
  ];
}
