import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from '../materia';
import { MateriasService } from '../materias.service';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormMateriaComponent implements OnInit {

  public materia: Materia = new Materia();
  public titulo: string = "Crear Materia";
  public errores!: String[];
  public dias: string[]=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

  public horarios: string[]=['9:00:00','10:00:00','11:00:00','18:00:00', '19:00:00', '20:00:00', '21:00:00', '22:00:00'];

  constructor(private materiasService: MateriasService, private router: Router, private activatedRoute:   ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      param => {
        let id = param['id'];
        if(id){
          this.materiasService.getMateria(id).subscribe(
            respuesta => {
              this.materia = respuesta;
              console.log(this.materia)
            }
          )
        }
      }
    );
  }

  public create(): void {
    console.log(this.materia);
     this.materiasService.createMaterias(this.materia)
    .subscribe(
        materia => {
        this.router.navigate(['/materias']);
        swal('Nuevo Materia', `La materia ha sido creado con exito!!`, 'success' )
      },
      err => {
        this.errores = err.error.errors as String[];
        console.error('Codigo del error desde el backEnd: '+ err.status);
        console.error(err.error.errors);
      }
    )
  };

  public updateMateria(materia: Materia): void{
    this.materiasService.updateMateria(this.materia).subscribe(
      json => {
        this.router.navigate(['/materias'])
        swal('Materia Actualizada', `${json.mensaje}: ${json.materia.nombre} actualizado con exito!`, 'success' )
      },
      err => {
        this.errores = err.error.errors as String[];
        console.error('Codigo del error desde el backEnd: '+ err.status);
        console.error(err.error.errors);
      }
    )
  }
}
