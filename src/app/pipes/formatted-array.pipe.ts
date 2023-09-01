import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedArray'
})
export class FormattedArrayPipe implements PipeTransform {

  transform(array: string[]): string {
    return array.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' | ');
  }

}
