import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { Titulo2Component } from './components/habilidades/titulo2/titulo2.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/habilidades/skills/skills.component';
import { NameComponent } from './components/home/name/name.component';
import { MenuMovilesComponent } from './components/menu-moviles/menu-moviles.component';


import { RestauranteWebComponent } from './components/proyectos/restaurante-web/restaurante-web.component';
import { ArticlesWebComponent } from './components/proyectos/articles-web/articles-web.component';
import { HistoriaAcademicaComponent } from './components/historia-academica/historia-academica.component';
import { Titulo4Component } from './components/historia-academica/titulo4/titulo4.component';
import { EstudiosComponent } from './components/historia-academica/estudios/estudios.component';
import { LenguajesComponent } from './components/habilidades/skills/lenguajes/lenguajes.component';
import { BibliotecaFlameworksComponent } from './components/habilidades/skills/biblioteca-flameworks/biblioteca-flameworks.component';
import { HerramientasComponent } from './components/habilidades/skills/herramientas/herramientas.component';
import { MetodologiasComponent } from './components/habilidades/skills/metodologias/metodologias.component';
import { SobreMiModule } from './components/sobre-mi/sobre-mi.module';
import { ProyectosModule } from './components/proyectos/proyectos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HabilidadesComponent,
    SobreMiComponent,
    ProyectosComponent,

    Titulo2Component,
    SkillsComponent,

    NameComponent,
    MenuMovilesComponent,
    


    HistoriaAcademicaComponent,
    Titulo4Component,
    EstudiosComponent,
    LenguajesComponent,
    BibliotecaFlameworksComponent,
    HerramientasComponent,
    MetodologiasComponent,
  ],
  imports: [
    BrowserModule,
    SobreMiModule,
    ProyectosModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
