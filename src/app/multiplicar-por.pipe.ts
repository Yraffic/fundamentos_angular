import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicarPor'
})
export class MultiplicarPorPipe implements PipeTransform {

  transform(valor: number, mutiplicador: number): number {
    return valor * mutiplicador;
  }

}
