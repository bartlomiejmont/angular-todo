import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favorite',
})
export class FavoritePipe implements PipeTransform {
  transform(value: string, favorite: boolean): string {
    if (favorite === false) {
      return `<span style="color: blue">${value}</span>`;
    }
    return `<span style="color: red">${value}</span>`;
  }
}
