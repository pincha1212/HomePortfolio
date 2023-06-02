import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-web',
  templateUrl: './articles-web.component.html',
  styleUrls: ['./articles-web.component.css'],
})
export class ArticlesWebComponent implements OnInit {
  constructor(private router: Router) {}
  goPRoyectos = () => {
    this.router.navigateByUrl('/proyectos');
  };
  
  ngOnInit(): void {}
  parrafos = [
    {title:'Investigación:',subtitle:'Antes de empezar a programar, busqué información sobre Angular y sus funciones. Aprendí que Angular es una plataforma y un framework para crear aplicaciones de una sola página en el lado del cliente usando HTML y TypeScript. También descubrí que Angular ofrece varias funciones potentes, como una inyección de dependencia exhaustiva, una capa de abstracción de base de datos expresiva, colas y trabajos programados, pruebas de integración y unidad y más.'},
    {title:'Diseño:',subtitle:'Para el diseño de la aplicación, utilicé Bootstrap como framework CSS. Bootstrap me facilitó crear un diseño responsive y atractivo para mi aplicación. Utilicé algunos componentes de Bootstrap como cards, buttons... También agregué algunos estilos propios para personalizar el aspecto de la aplicación.'},
    {title:'Desarrollo:',subtitle:'Finalmente, empecé a desarrollar la aplicación usando VSCode como editor de código. Utilicé el Angular CLI para generar los componentes, servicios y módulos necesarios para mi aplicación. Creé una clase Article para modelar los datos de cada artículo. También creé un componente ArticleListComponent para mostrar el listado de artículos y un componente ArticleFormComponent para agregar o editar un artículo. Utilicé el servicio Router de Angular para definir las rutas de navegación entre las vistas. En algún futuro agregaré un CRUD que se conecte con una base de datos en el backend y me permita hacer modificaciones del listado a través de la web en cualquier parte del mundo.   Espero que les haya gustado mi proyecto y que les haya servido para conocer un poco más sobre Angular y sus funciones. Si tienen alguna pregunta o sugerencia, no duden en dejarme un comentario. ¡Gracias por su atención!'},
  ];



}
