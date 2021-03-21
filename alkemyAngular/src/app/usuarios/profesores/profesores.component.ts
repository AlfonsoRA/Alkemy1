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

  delete(profesor: Profesor): void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Seguro que desea eliminar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.profesorService.deleteProfesor(profesor.id).subscribe(
          response => {
            this.listaProfesores = this.listaProfesores.filter(pro => pro !== profesor)
            swal.fire(
              'Eliminado!',
              'Cliente Eliminado.',
              'success'
            )
          }
        )
      }
    })
  };

}
