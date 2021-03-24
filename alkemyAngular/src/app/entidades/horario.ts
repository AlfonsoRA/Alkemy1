import { Materia } from '../usuarios/materias/materia';

export class Horario {

  public id!: number;
  public fecha!: Date;
  public hora!: string;
  public materia!: Materia;

}
