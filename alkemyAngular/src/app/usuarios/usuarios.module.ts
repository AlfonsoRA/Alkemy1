import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesoresComponent } from './profesores/profesores.component';
import { MateriasComponent } from './materias/materias.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './profesores/form/form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { FormMateriaComponent } from './materias/form/form.component';
import { DetalleMateriaComponent } from './materias/detalle-materia/detalle-materia.component';
import { InscripcionMateriaComponent } from './materias/inscripcion-materia/inscripcion-materia.component';




@NgModule({
  declarations: [ProfesoresComponent, MateriasComponent, FormComponent,FormMateriaComponent, DetalleMateriaComponent, InscripcionMateriaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule{ }
