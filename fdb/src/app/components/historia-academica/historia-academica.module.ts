import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriaAcademicaRoutingModule } from './historia-academica-routing.module';
import { Titulo4Component } from './titulo4/titulo4.component';
import { EstudiosComponent } from './estudios/estudios.component';


@NgModule({
  declarations: [
    Titulo4Component,
    EstudiosComponent,
  ],
  imports: [
    CommonModule,
    HistoriaAcademicaRoutingModule
  ],
  exports:[
    Titulo4Component,
    EstudiosComponent,
  ]
})
export class HistoriaAcademicaModule { }
