import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DetalleComponent } from './clientes/detalle/detalle.component';
import { LoginComponent } from './usuarios/login.component';
import { AuthGuard } from './usuarios/guards/auth.guard';
import { RoleGuard } from './usuarios/guards/role.guard';
import { TokenInterceptor } from './usuarios/interceptors/token.interceptor';
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor';
import { MateriasComponent } from './materias/materias.component';
import { InscripcionMateriaComponent } from './materias/inscripcion-materia/inscripcion-materia.component';
import { FormMateriaComponent } from './materias/form/form.component';
import { DetalleMateriaComponent } from './materias/detalle-materia/detalle-materia.component';
import { MateriasService } from './materias/materias.service';
import { ProfesoresService } from './profesores/profesores.service';
import { ProfesoresComponent } from './profesores/profesores.component';

registerLocaleData(localeES, 'es');

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clientes', component: ClientesComponent },
  {path: 'profesor', component: ProfesoresComponent},
  {path: 'profesor/form', component:FormComponent},
  {path: 'profesor/form/:id', component:FormComponent},
  { path: 'materias', component: MateriasComponent },
  { path: 'materia', component: MateriasComponent},
  { path: 'materia/form', component:FormMateriaComponent},
  { path: 'materia/form/:id', component:FormMateriaComponent},
  { path: 'materia/detalle', component:DetalleMateriaComponent},
  { path: 'materia/detalle/:id', component:DetalleMateriaComponent},
  { path: 'materia/inscripcion/:id', component:InscripcionMateriaComponent},
  { path: 'clientes/page/:page', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'clientes/form/:id', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    LoginComponent, 
    MateriasComponent,
    InscripcionMateriaComponent,
    FormMateriaComponent,
    DetalleMateriaComponent,
    ProfesoresComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, MatDatepickerModule, MatMomentDateModule
  ],
  providers: [ClienteService, MateriasService, ProfesoresService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
