import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'documentacion', component: DocumentacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
