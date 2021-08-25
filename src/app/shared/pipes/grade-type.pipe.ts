import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeType'
})
export class GradeTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    const type = args[0];
    if (type === 0)
      return "CGPA : " + value;

    return "Result : " + value + '%';

  }
}
