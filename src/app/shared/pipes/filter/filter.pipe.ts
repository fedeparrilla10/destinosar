import { Pipe, PipeTransform } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: PlacesI[], filterValue: string): PlacesI[] {
    return value.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
