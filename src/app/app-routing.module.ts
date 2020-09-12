import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'documentacion', component: DocumentacionComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
