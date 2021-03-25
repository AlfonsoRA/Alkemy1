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
  /*myForm: FormGroup = this.formBuilder.group({
    nombre: [this.materia.nombre,[Validators.required, Validators.minLength(4)]],
    max_alum: [0, [Validators.required, Validators.min(0), Validators.max(30)]]
  });*/

  constructor(private materiasService: MateriasService, private router: Router, private activatedRoute: ActivatedRoute, /* private formBuilder: FormBuilder */) { }

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
     this.materiasService.createMaterias(this.materia)
    .subscribe(
        materia => {
        this.router.navigate(['/materia']);
        console.log(materia);
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
        this.router.navigate(['/materia'])
        swal('Materia Actualizada', `${json.mensaje}: ${json.materia.nombre} actualizado con exito!`, 'success' )
      },
      err => {
        this.errores = err.error.errors as String[];
        console.error('Codigo del error desde el backEnd: '+ err.status);
        console.error(err.error.errors);
      }
    )
  }



  /* validacion(campo:string){
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  } */

}
