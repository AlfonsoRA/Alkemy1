import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2'
import { Materia } from './materia';
import { MateriasService } from './materias.service';
import { AuthService } from '../usuarios/auth.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  listaMaterias!: Materia[];

  constructor(private materiaService: MateriasService, private authService: AuthService) { }

  ngOnInit(): void {
    this.materiaService.getMaterias().subscribe(
      materias => {
        this.listaMaterias = materias
      }
    );
  };

  delete(materia: Materia): void {
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

        this.materiaService.deleteMateria(materia.id).subscribe(
          response => {
            this.listaMaterias = this.listaMaterias.filter(mat => mat !== materia)
            swal(
              'Eliminado!',
              'Materia Eliminada.',
              'success'
            )
          }
        )

      }
    });
  }

}
