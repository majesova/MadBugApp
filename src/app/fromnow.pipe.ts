import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromnow'
})
export class FromnowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).fromNow();
  }

}
