import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from './profesores.service';
import { Profesor } from './profesor';
import swal from 'sweetalert2'

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  listaProfesores!: Profesor[];

  constructor(private profesorService: ProfesoresService) { }

  ngOnInit(): void {
    this.profesorService.getProfesores().subscribe(
      profesores => {
        this.listaProfesores = profesores
      }
    );
  }




  delete(profesor: Profesor): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la materia?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.profesorService.deleteProfesor(profesor.id).subscribe(
          response => {
            this.listaProfesores = this.listaProfesores.filter(pro => pro !== profesor)
            swal(
              'Eliminado!',
              'Cliente Eliminado.',
              'success'
            )
          }
        )

      }
    });
  }

}
