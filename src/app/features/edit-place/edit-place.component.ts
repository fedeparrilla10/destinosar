import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/core/services/places.service';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.scss'],
})
export class EditPlaceComponent {
  public place?: PlacesI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.placesService.getPlace(id).subscribe((place: PlacesI) => {
        this.place = place;
        console.log(place);
      });
    });
  }
}
