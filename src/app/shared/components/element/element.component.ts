import { Component, Input } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent {
  @Input() public placeList?: PlacesI[];
}
