import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss'],
})
export class PlaceDetailsComponent {
  public detailedPlace?: PlacesI;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.placesService.getPlace(id).subscribe((place: PlacesI) => {
        this.detailedPlace = place;
      });
    });
  }
}
