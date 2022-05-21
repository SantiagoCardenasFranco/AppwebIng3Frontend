export class Login implements Respuesta
{
    nombre:String = "";
    password:String = "";

  constructor()
  {

  }
    valor!: String;
}
export interface Respuesta {
    valor:String;
}