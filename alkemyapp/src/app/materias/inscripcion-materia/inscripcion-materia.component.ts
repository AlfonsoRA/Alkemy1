import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriasService } from '../materias.service';
import { Usuario } from '../../usuarios/usuario';

@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css']
})
export class InscripcionMateriaComponent implements OnInit {

  public materia: Materia = new Materia();
  public titulo: string = "Inscripcion de Materia";
  public errores!: String[];

  constructor(private materiasService: MateriasService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargarMateria();
  }

  public cargarMateria(): void{
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
}
