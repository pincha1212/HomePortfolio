import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NameComponent } from './components/home/name/name.component';
import { MenuMovilesComponent } from './components/menu-moviles/menu-moviles.component';

import { HistoriaAcademicaComponent } from './components/historia-academica/historia-academica.component';
import { SobreMiModule } from './components/sobre-mi/sobre-mi.module';
import { ProyectosModule } from './components/proyectos/proyectos.module';
import { HabilidadesModule } from "./components/habilidades/habilidades.module";
import { HistoriaAcademicaModule } from './components/historia-academica/historia-academica.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HabilidadesComponent,
        SobreMiComponent,
        ProyectosComponent,
        NameComponent,
        MenuMovilesComponent,
        HistoriaAcademicaComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SobreMiModule,
        ProyectosModule,
        AppRoutingModule,
        HabilidadesModule,
        HistoriaAcademicaModule
    ]
})
export class AppModule { }
