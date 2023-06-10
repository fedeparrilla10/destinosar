import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { PlacesService } from 'src/app/core/services/places.service';
import { ActivitiesI } from 'src/app/core/models/interfaces/places-interface';
import { ImageI } from 'src/app/core/models/interfaces/places-interface';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss'],
})
export class PlaceDetailsComponent implements OnInit {
  public detailedPlace?: PlacesI;
  public allImages?: ImageI[];
  public allActivities?: ActivitiesI[];

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) {}

  ngOnInit(): void {
    this.getPlaceDetails();
  }

  private getPlaceDetails() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.placesService.getPlace(id).subscribe((place: PlacesI) => {
        this.detailedPlace = place;

        this.allImages = [...this.detailedPlace.images];
        this.allActivities = [...this.detailedPlace.activities];
      });
    });
  }
}
