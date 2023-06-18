import { Pipe, PipeTransform } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { Province } from 'src/app/core/models/types/region-type';

@Pipe({
  name: 'filterProvince',
})
export class FilterProvincePipe implements PipeTransform {
  transform(value: PlacesI[], filterValue: Province): PlacesI[] {
    if (!filterValue) {
      return value;
    }
    return value.filter((item) => item.province === filterValue);
  }
}
