import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from '../profesor';
import { ProfesoresService } from '../profesores.service';
import swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public profesor: Profesor = new Profesor();
  public titulo: string = "Crear Profesor";
  public errores!: String[];
  /* myForm: FormGroup = this.formBuilder.group({
    nombre: [this.profesor.nombre,[Validators.required, Validators.minLength(4)]],
    apellido: [this.profesor.apellido,[Validators.required]],
    dni: [this.profesor.dni, [Validators.required, Validators.min(0)]]
  }); */

  constructor(private profesoresService: ProfesoresService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cargarProfesor();
  }

  public create(): void {
    console.log(this.profesor)
    this.profesoresService.createProfesor(this.profesor)
    .subscribe(
        profesor => {
        this.router.navigate(['/profesor'])
        swal('Nuevo Profesor', `El profesor ${profesor.nombre} ha sido creado con exito!!`, 'success' )
      },
      err => {
        this.errores = err.error.errors as String[];
        console.error('Codigo del error desde el backEnd: '+ err.status);
        console.error(err.error.errors);
      }
    )
  };

  public updateProfesor(profesor: Profesor): void{
    this.profesoresService.updateProfesor(this.profesor).subscribe(
      json => {
        this.router.navigate(['/profesor'])
        swal('Profesor Actualizado', `${json.mensaje}: ${json.profesor.nombre} actualizado con exito !`, 'success' )
      },
      err => {
        this.errores = err.error.errors as String[];
        console.error('Codigo del error desde el backEnd: '+ err.status);
        console.error(err.error.errors);
      }
    )
  }
  

  public cargarProfesor(): void{
    this.activatedRoute.params.subscribe(
        param => {
          let id = param['id']
          if(id){
            this.profesoresService.getProfesor(id).subscribe(
              respuesta => {
                this.profesor = respuesta
              }
            )
          }
        }
    )
  };

  /* validacion(campo:string){
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  } */


}
