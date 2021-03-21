import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './usuarios/profesores/form/form.component';
import { ProfesoresComponent } from './usuarios/profesores/profesores.component';

import { FormMateriaComponent } from './usuarios/materias/form/form.component';
import { MateriasComponent } from './usuarios/materias/materias.component';
import { DetalleMateriaComponent } from './usuarios/materias/detalle-materia/detalle-materia.component';

const ROUTES: Routes =[
  {path: ' ', redirectTo: 'profesores', pathMatch: 'full'},
  {path: 'profesor', component: ProfesoresComponent},
  {path: 'profesor/form', component:FormComponent},
  {path: 'profesor/form/:id', component:FormComponent},
  {path: 'materia', component: MateriasComponent},
  {path: 'materia/form', component:FormMateriaComponent},
  {path: 'materia/form/:id', component:FormMateriaComponent},
  {path: 'materia/detalle', component:DetalleMateriaComponent},
  {path: 'materia/detalle/:id', component:DetalleMateriaComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
