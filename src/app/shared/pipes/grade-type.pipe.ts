import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeType'
})
export class GradeTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    // TODO: Add logic for grade type
    // console.log(value, args);
    
    return value;
  }
}
