import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilidadesRoutingModule } from './habilidades-routing.module';
import { Titulo2Component } from './titulo2/titulo2.component';
import { SkillsComponent } from './skills/skills.component';
import { BibliotecaFlameworksComponent } from './skills/biblioteca-flameworks/biblioteca-flameworks.component';
import { HerramientasComponent } from './skills/herramientas/herramientas.component';
import { LenguajesComponent } from './skills/lenguajes/lenguajes.component';
import { MetodologiasComponent } from './skills/metodologias/metodologias.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    Titulo2Component,
    SkillsComponent,
    LenguajesComponent,
    BibliotecaFlameworksComponent,
    HerramientasComponent,
    MetodologiasComponent,
  ],
  imports: [
    CommonModule,
    HabilidadesRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
  }),
  ],
  exports:[
    Titulo2Component,
    SkillsComponent,
    LenguajesComponent,
    BibliotecaFlameworksComponent,
    HerramientasComponent,
    MetodologiasComponent,
  ]
})
export class HabilidadesModule { }
