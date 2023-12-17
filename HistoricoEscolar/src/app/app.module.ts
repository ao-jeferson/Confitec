import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
