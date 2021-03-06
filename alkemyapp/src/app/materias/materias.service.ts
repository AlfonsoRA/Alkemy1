import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import swal from 'sweetalert2'

import { Materia } from './materia';
import { Observable, of, throwError   } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Inscripcion } from './inscripcion-materia/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});
  private urlEndPoint = "http://localhost:8080/materias/materia";
  private urlEndPointInsc = "http://localhost:8080/inscripcion/save";

  constructor(private http: HttpClient, private router: Router) { }

      //observado
      getMaterias(): Observable<Materia[]> {
        //return of(Profesor);
        return this.http.get(this.urlEndPoint).pipe(
          map (Response => {

            let materia = Response as Materia[];
            return materia.map(materia => {
                materia.nombre = materia.nombre.toUpperCase();
                //materia.create_at != formatDate(materia.create_at, 'dd-MM-yyyy', 'en-US');
                return materia;
            });
          })
        );
      };

  createMaterias(materia: Materia): Observable<Materia>{
    return this.http.post(this.urlEndPoint, materia,{headers: this.httpHeaders}).pipe(
      map( (response: any) => response.usuario as Materia),
      catchError(e => {
        if(e.status == 400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal('Error al crear la materia', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  };

  deleteMateria(id:number): Observable<Materia>{
    return this.http.delete<Materia>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders} ).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal('Error al eliminar la materia', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  };

  updateMateria(materia: Materia): Observable<any>{ console.log(materia.descripcion)
    return this.http.put<any>(`${this.urlEndPoint}/${materia.id}`, materia, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if(e.status == 400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal('Error al modificar la materia', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  };

  getMateria(id: number): Observable<Materia>{
    return this.http.get(`${this.urlEndPoint}/${id}`).pipe(
      map (Response => Response as Materia),
      catchError(e => {
        this.router.navigate(['/materia']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  };

  createInscripcion(username: string, materia:number): Observable<Inscripcion>{
    return this.http.post(`${this.urlEndPointInsc}/${username}/${materia}`,{headers: this.httpHeaders}).pipe(
      map( (response: any) => response.inscripcion as Inscripcion),
      catchError(e => {
        if(e.status == 400){
          swal('Error al crear la inscripcion', e.error.mensaje, 'error');
          return throwError(e);
          
        }
        console.error(e.error.mensaje);
        swal('Error al crear la inscripcion', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  };
    
}
