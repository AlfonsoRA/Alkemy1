import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


import { AuthGuard } from './usuarios/guards/auth.guard';
import { RoleGuard } from './usuarios/guards/role.guard';

import { TokenInterceptor } from './usuarios/interceptors/token.interceptor';
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor';

import { LoginComponent } from './usuarios/login.component';
import { MateriasComponent } from './materias/materias.component';
import { InscripcionMateriaComponent } from './materias/inscripcion-materia/inscripcion-materia.component';
import { FormMateriaComponent } from './materias/form/form.component';
import { DetalleMateriaComponent } from './materias/detalle-materia/detalle-materia.component';
import { MateriasService } from './materias/materias.service';
import { ProfesoresService } from './profesores/profesores.service';
import { ProfesoresComponent } from './profesores/profesores.component';
import { FormComponent } from './profesores/form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatorComponent } from './paginator/paginator.component';

registerLocaleData(localeES, 'es');

const routes: Routes = [
  { path: '', redirectTo: '/materias', pathMatch: 'full' },
  { path: 'profesor', component: ProfesoresComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'profesor/form/:id', component:FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  { path: 'profesor/form', component:FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'materias', component: MateriasComponent },
  { path: 'materia/form', component:FormMateriaComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  { path: 'materia/form/:id', component:FormMateriaComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  { path: 'materia/detalle', component:DetalleMateriaComponent},
  { path: 'materia/detalle/:id', component:DetalleMateriaComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_USER' }},
  { path: 'materia/inscripcion/:id', component:InscripcionMateriaComponent,},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    PaginatorComponent,
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
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, MatDatepickerModule, MatMomentDateModule
  ],
  providers: [ MateriasService, ProfesoresService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
