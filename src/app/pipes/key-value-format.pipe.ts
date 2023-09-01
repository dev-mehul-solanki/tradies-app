import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValueFormat'
})
export class KeyValueFormatPipe implements PipeTransform {

  transform(value: any): string {
    return Object.keys(value)
      .map(key => `${this.capitalize(key)}: ${value[key]}`)
      .join(' | ');
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
