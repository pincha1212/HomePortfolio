import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EnlacesSocialesComponent } from './components/sobre-mi/enlaces-sociales/enlaces-sociales.component';
import { TituloComponent } from './components/sobre-mi/titulo/titulo.component';
import { DescripcionComponent } from './components/sobre-mi/descripcion/descripcion.component';
import { EnlaceCvComponent } from './components/sobre-mi/enlace-cv/enlace-cv.component';
import { FooterComponent } from './components/sobre-mi/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HabilidadesComponent,
    SobreMiComponent,
    ProyectosComponent,
    EnlacesSocialesComponent,
    TituloComponent,
    DescripcionComponent,
    EnlaceCvComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
