import { Materia } from "../materias/materia";


export class Horario {

  public id!: number;
  public fecha!: Date;
  public hora!: string;
  public materia!: Materia;

}
