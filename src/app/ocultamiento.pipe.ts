import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultamiento'
})
export class OcultamientoPipe implements PipeTransform {

  transform(value: string, hide: boolean = true): any {

    return !hide ? value.replace(/./g, '*') : value;
  }
}