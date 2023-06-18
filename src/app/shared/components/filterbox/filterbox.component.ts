import { Component, EventEmitter, Output } from '@angular/core';
import { Province } from 'src/app/core/models/types/region-type';

@Component({
  selector: 'app-filterbox',
  templateUrl: './filterbox.component.html',
  styleUrls: ['./filterbox.component.scss'],
})
export class FilterboxComponent {
  @Output() public optionChanges = new EventEmitter<Province>();

  public selectedProvince: Province = '';

  optionChanged(value: Province) {
    this.optionChanges.emit(value);
  }
}
