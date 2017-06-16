import { Pipe, PipeTransform } from '@angular/core';
import { Superhero } from './superhero.model';

@Pipe({
  name: 'affiliationPipe',
  pure: false
})

export class AffiliationPipe implements PipeTransform {

  transform(input: Superhero[], affiliationInput: string): any {
    var output: Superhero[] = [];

    if (affiliationInput === "all") {
      output = input;
    }
    else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].affiliation === affiliationInput) {
          output.push(input[i]);
        }
      }

    }
    return output;
  }

}
