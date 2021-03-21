import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2'
import { Materia } from './materia';
import { MateriasService } from './materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  listaMaterias!: Materia[];

  constructor(private materiaService: MateriasService) { }

  ngOnInit(): void {
    this.materiaService.getMaterias().subscribe(
      materias => {
        this.listaMaterias = materias
      }
    );
  };

  delete(materia: Materia): void{
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
        this.materiaService.deleteMateria(materia.id).subscribe(
          response => {
            this.listaMaterias = this.listaMaterias.filter(mat => mat !== materia)
            swal.fire(
              'Eliminado!',
              'Materia Eliminada.',
              'success'
            )
          }
        )
      }
    })
  }

}
