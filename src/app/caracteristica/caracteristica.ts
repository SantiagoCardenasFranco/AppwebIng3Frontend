import { NumberSymbol } from "@angular/common";
import { TamanosEspecificacion } from "../tamano/tamano";

export interface Caracteristica {
    id:Number,
    marca: string,
    descripcion: string;
    tamano: TamanosEspecificacion;
    proveedor: string;
}
