import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{
  // Se declara la propiedad cards como un array de objetos con los datos de cada tarjeta 
  cards = [ 
   { title: 'EDUCACIÓN PRIMARIA Y SECUNDARIA: BACHILLER EN EDUCACIÓN FÍSICA', subtitle: '"PRESENCIAL" Colegio Nuestra Señora de la Consolata (2006-2018)' },
   { title: 'INSTITUTO GASTRONÓMICO IGA:', subtitle: '"PRESENCIAL" « Chef Express » (2021)' }, 
   { title: 'ARGENTINA PROGRAMA:', subtitle: '"VIRTUAL" Primera Etapa' },
   { title: 'TICMAS ACADEMY:', subtitle: '"VIRTUAL" Desarrollo Web'},
   { title: 'PROGRAMING HUB:', subtitle:'"VIRTUAL" Desarrollo Web'}
  ];

// Se define el constructor de la clase 
constructor() { }

// Se define el método ngOnInit que se ejecuta al inicializar el componente 
ngOnInit(): void { }

}
