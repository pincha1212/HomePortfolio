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
import { Titulo2Component } from './components/habilidades/titulo2/titulo2.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/habilidades/skills/skills.component';
import { Titulo3Component } from './components/proyectos/titulo3/titulo3.component';
import { NameComponent } from './components/home/name/name.component';

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
    Titulo2Component,
    SkillsComponent,
    Titulo3Component,
    NameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
