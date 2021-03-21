import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ComunModule } from './comun/comun.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { AppComponent } from './app.component';
import { ProfesoresService } from './usuarios/profesores/profesores.service';
import { HttpClientModule } from '@angular/common/http';
import { MateriasService } from './usuarios/materias/materias.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunModule,
    UsuariosModule
  ],
  providers: [ProfesoresService, MateriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
