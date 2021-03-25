import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from '../materia';
import { MateriasService } from '../materias.service';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {

  public materia: Materia = new Materia();
  public titulo: string = "Descripcion de la Materia";

  constructor(private materiasService: MateriasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      param => {
        let id = param['id']
        if(id){
          this.materiasService.getMateria(id).subscribe(
            respuesta => {
              this.materia = respuesta
              console.log(respuesta)
            }
          )
        }
      }
  )
  };

}
