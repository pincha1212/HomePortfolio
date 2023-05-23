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
    {title:'El encabezado:',subtitle:'- Quería que fuera original y dinámico, así que decidí colocar los botones de navegación en posiciones aleatorias en cada sección de mi página. Así, el usuario tiene que buscarlos y se sorprende con cada cambio. Creo que esto le da un toque divertido y diferente a mi portafolio.'},
    {title:'El nombre:',subtitle:'- Quería que fuera visible y llamativo, así que lo escribí en letras grandes y con un efecto iluminacion. Me inspiré en una página web que vi hace tiempo, pero no recuerdo cuál era. Me gustó cómo quedó porque creo que refleja mi personalidad y mi estilo.'},
    {title:'La sección "sobre mí":',subtitle:'- Quería que fuera informativa y personal, así que incluí una frase que resume mis objetivos y mi actitud, además de mis datos personales, mis redes sociales y mi CV. Así, el usuario puede conocerme mejor y contactarme si le interesa mi trabajo.'},
    {title:'La sección "habilidades":', subtitle:'- Quería que fuera visual y atractiva, así que usé unas barras circulares para mostrar mi nivel de dominio en diferentes lenguajes y herramientas de programación. Las barras las encontré en una página donde se pueden instalar los "ng circle progress", que me parecieron muy útiles y bonitos.'},
    {title:'La sección "proyectos":', subtitle:'- Quería que fuera ilustrativa y variada, así que mostré algunos de mis proyectos más destacados, con una breve descripción y un enlace para verlos en detalle. Tengo pensado agregar más proyectos en el futuro, para mostrar la diversidad de mi trabajo.'},
    {title:'La adaptación a dispositivos móviles:',subtitle:'- Quería que fuera funcional y cómoda, así que ajusté el diseño y el tamaño de los elementos para que se vieran bien en pantallas pequeñas. Espero que haya quedado perfecto así como está.'},
    {title:'Cosas que no agregué:',subtitle:'Tenía la idea de hacer un pie de página (footer) que se mostrara en todas las secciones, pero lo descarté porque me pareció innecesario y redundante. También pensé en hacer que el pie de página cambiara según la sección, pero lo descarté por la misma razón.'},
    {title:'Ideas geniales por hacer:',subtitle:'Tengo en mente hacer una sección para que los posibles clientes como tú puedan escribirme a mi correo de forma fácil. También me gustaría hacer un inicio de sesión, para que puedas usar esta página web como una plantilla para tu CV personal. Y por último, me gustaría agregar animaciones, pero necesito investigar bien cómo hacerlo y si funciona bien.'}
  ];
}
