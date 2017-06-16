import { Pipe, PipeTransform } from '@angular/core';
import { Superhero } from './superhero.model';

@Pipe({
  name: 'teamPipe',
  pure: false
})
export class TeamPipe implements PipeTransform {

  transform(input: Superhero[], teamInput: string): any {
    var output: Superhero[] = [];

    if (teamInput === "allTeams") {
      output = input;
    }
    else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].team === teamInput) {
          output.push(input[i]);
        }
      }

    }
    return output;
  }

}
