import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { NgToastModule } from 'ng-angular-popup';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ComponentsModule,
    NgToastModule
  ],
  providers: [provideHotToastConfig()],
  bootstrap: [AppComponent]
})
export class AppModule { }
