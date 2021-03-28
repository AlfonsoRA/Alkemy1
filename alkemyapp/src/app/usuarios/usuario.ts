export class Usuario {
  id: number;
  username: string;
  password: string;
  enabled: boolean;
  email: string;
  roles: string[] = [];
  nombre: string;
  apellido: string;
  dni: number;
}
