import { Pipe, PipeTransform } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';

@Pipe({
  name: 'filterProvince',
})
export class FilterProvincePipe implements PipeTransform {
  transform(value: PlacesI[], filterValue: string): PlacesI[] {
    return value.filter(
      (item) => item.province.toLowerCase() === filterValue.toLowerCase()
    );
  }
}
