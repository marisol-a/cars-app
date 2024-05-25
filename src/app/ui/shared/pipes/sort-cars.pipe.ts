import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCars'
})
export class SortCarsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
