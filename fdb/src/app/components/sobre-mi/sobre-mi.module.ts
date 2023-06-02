import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreMiRoutingModule } from './sobre-mi-routing.module';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { TituloComponent } from './titulo/titulo.component';
import { FooterComponent } from './footer/footer.component';
import { EnlacesSocialesComponent } from './enlaces-sociales/enlaces-sociales.component';
import { EnlaceCvComponent } from './enlace-cv/enlace-cv.component';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';


@NgModule({
  declarations: [
    DescripcionComponent,
    TituloComponent,
    FooterComponent,
    EnlacesSocialesComponent,
    EnlaceCvComponent,
    FotoPerfilComponent,

  ],
  imports: [
    CommonModule,
    SobreMiRoutingModule,

  ],
  exports:[
    DescripcionComponent,
    TituloComponent,
    FooterComponent,
    EnlacesSocialesComponent,
    EnlaceCvComponent,
    FotoPerfilComponent
  ]
})
export class SobreMiModule { }
