import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { Titulo3Component } from './titulo3/titulo3.component';
import { PortafolioWebComponent } from './portafolio-web/portafolio-web.component';
import { RestauranteWebComponent } from './restaurante-web/restaurante-web.component';
import { ArticlesWebComponent } from './articles-web/articles-web.component';


@NgModule({
  declarations: [
    Titulo3Component,
    PortafolioWebComponent,
    RestauranteWebComponent,
    ArticlesWebComponent,
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ],
  exports:[
    Titulo3Component,
    PortafolioWebComponent,
    RestauranteWebComponent,
    ArticlesWebComponent,
  ]
})
export class ProyectosModule { }
