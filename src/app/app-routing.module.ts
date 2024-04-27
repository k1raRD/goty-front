import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'goty', component: GotyComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
