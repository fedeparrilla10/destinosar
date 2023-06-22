import { Component, EventEmitter, Output } from '@angular/core';
import { Province } from 'src/app/core/models/types/region-type';
import { PROVINCE_ARRAY } from 'src/app/core/models/constants/constants';

@Component({
  selector: 'app-filterbox',
  templateUrl: './filterbox.component.html',
  styleUrls: ['./filterbox.component.scss'],
})
export class FilterboxComponent {
  @Output() public optionChanges = new EventEmitter<Province>();

  public provinceArray = PROVINCE_ARRAY;

  public selectedProvince: Province = '';

  public optionChanged(value: Province) {
    this.optionChanges.emit(value);
  }
}
