import { Pipe, PipeTransform } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';

@Pipe({
  name: 'filterName',
})
export class FilterNamePipe implements PipeTransform {
  transform(value: PlacesI[], filterValue: string): PlacesI[] {
    return value.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
