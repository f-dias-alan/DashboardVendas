import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEstoque',
  standalone: true,
})
export class StatusEstoquePipe implements PipeTransform {

  transform(estoque: number): string {

    if (estoque === 0) {
      return 'Sem estoque';
    }

    if (estoque < 10) {
      return 'Baixo estoque';
    }

    return 'Em estoque';
  }
}