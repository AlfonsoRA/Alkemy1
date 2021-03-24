import { Horario } from '../../entidades/horario';
export class Materia {

  public id!: number;
  public nombre!: string;
  public horario: Array<Horario> = [];
  public max_alum!: number;
  public create_at!: string;
}
