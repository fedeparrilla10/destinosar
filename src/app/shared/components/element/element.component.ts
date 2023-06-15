import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { PlacesService } from '../../../core/services/places.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent {
  @Input() public eachPlace?: PlacesI;
  @Output() public removePlace: EventEmitter<PlacesI> = new EventEmitter();

  deletePlace(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.removePlace.emit(this.eachPlace);
  }
}
