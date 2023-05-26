import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { MenuMovilesComponent } from './components/menu-moviles/menu-moviles.component';
import { PortafolioWebComponent } from './components/proyectos/portafolio-web/portafolio-web.component';
import { RestauranteWebComponent } from './components/proyectos/restaurante-web/restaurante-web.component';
import { ArticlesWebComponent } from './components/proyectos/articles-web/articles-web.component';
import { HistoriaAcademicaComponent } from './components/historia-academica/historia-academica.component';
import { LenguajesComponent } from './components/habilidades/skills/lenguajes/lenguajes.component';
import { BibliotecaFlameworksComponent } from './components/habilidades/skills/biblioteca-flameworks/biblioteca-flameworks.component';
import { HerramientasComponent } from './components/habilidades/skills/herramientas/herramientas.component';
import { MetodologiasComponent } from './components/habilidades/skills/metodologias/metodologias.component';
import { ContactameComponent } from './components/contactame/contactame.component';

const routes: Routes = [
  { path: '', title: 'Portafolio-FDB | INICIO' , component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'habilidades',title:'HABILIDADES' , component: HabilidadesComponent,
  children: [
    { path: '',title:'HABILIDADES' , component: LenguajesComponent},
    { path: 'lenguajes', component: LenguajesComponent},
    { path: 'biblioteca-flameworks', component: BibliotecaFlameworksComponent},
    { path: 'herramientas', component: HerramientasComponent},
    { path: 'metodologias', component: MetodologiasComponent},
  ]},
  { path: 'sobre-mi', title:'SOBRE MI' , component: SobreMiComponent },
  { path: 'proyectos', title:'PROYECTOS' ,component: ProyectosComponent},
  { path: 'portafolio-web',title:'MI PORTAFOLIO' , component: PortafolioWebComponent},
  { path: 'restaurante-web',title:'RESTAURANTE' , component: RestauranteWebComponent},
  { path: 'articles-web',title:'ADMINISTRACION DE ARTICULOS' , component: ArticlesWebComponent},
  { path: 'menu-moviles',title:'Portafolio-FDB | INICIO' , component: MenuMovilesComponent},
  { path: 'historia-academica',title:'HISTORIA ACADEMICA' , component: HistoriaAcademicaComponent},
  { path: 'contactame',title:'CONTACTATE CONMIGO' , component: ContactameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
