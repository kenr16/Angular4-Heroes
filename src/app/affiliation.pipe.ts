import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'affiliation'
})
export class AffiliationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
