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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'portafolio-web', component: PortafolioWebComponent},
  { path: 'restaurante-web', component: RestauranteWebComponent},
  { path: 'articles-web', component: ArticlesWebComponent},
  { path: 'menu-moviles', component: MenuMovilesComponent},
  { path: 'historia-academica', component: HistoriaAcademicaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
