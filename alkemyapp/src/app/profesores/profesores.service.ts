import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import swal from 'sweetalert2'

import { Profesor } from './profesor';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});
  private urlEndPoint = "http://localhost:8080/profesores";

  constructor(private http: HttpClient, private router: Router) { }

    //observado
    getProfesores(): Observable<Profesor[]> {
      //return of(Profesor);
      return this.http.get(`${this.urlEndPoint}/profesores/Teacher`).pipe(
        map (Response => {

          let profesor = Response as Profesor[];
          return profesor.map(profesor => {
              profesor.nombre = profesor.nombre.toUpperCase();
              //profesor.create_at != formatDate(profesor.create_at, 'dd-MM-yyyy', 'en-US');
              return profesor;
          });
        })
      );
    };

    createProfesor(profesor: Profesor): Observable<Profesor>{
      return this.http.post(`${this.urlEndPoint}/profesor`,profesor,{headers: this.httpHeaders}).pipe(
        map( (response: any) => response.usuario as Profesor),
        catchError(e => {
          if(e.status == 400){
            return throwError(e);
          }
          console.error(e.error.mensaje);
          swal('Error al crear el profesor', e.error.mensaje , 'error');
          return throwError(e);
        })
      )
    };

    deleteProfesor(id:number): Observable<Profesor>{
      return this.http.delete<Profesor>(`${this.urlEndPoint}/profesor/${id}`, {headers: this.httpHeaders} ).pipe(
        catchError(e => {
          console.error(e.error.mensaje);
          swal('Error al eliminar al profesor', e.error.mensaje, 'error');
          return throwError(e);
        })
      )
    };

    updateProfesor(profesor: Profesor): Observable<any>{
      return this.http.put<any>(`${this.urlEndPoint}/profesor/${profesor.id}`, profesor, {headers: this.httpHeaders}).pipe(
        catchError(e => {
          if(e.status == 400){
            return throwError(e);
          }
          console.error(e.error.mensaje);
          swal('Error al modificar el profesor', e.error.mensaje, 'error');
          return throwError(e);
        })
      )
    };

    getProfesor(id: number): Observable<Profesor>{
      return this.http.get(`${this.urlEndPoint}/profesor/${id}`).pipe(
        map (Response => Response as Profesor),
        catchError(e => {
          this.router.navigate(['/profesor']);
          console.error(e.error.mensaje);
          swal('Error al editar', e.error.mensaje, 'error');
          return throwError(e);
        })
      )
    };

}
