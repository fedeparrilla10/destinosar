import { Component } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public newPlaces: PlacesI[] = [];

  constructor(private placesService: PlacesService) {}

  public ngOnInit(): void {
    this.getPlaces();
  }

  private getPlaces(): void {
    this.placesService.getPlaces().subscribe((places: PlacesI[]) => {
      this.newPlaces = places.filter((place) => place.isCustom);
    });
  }

  public deletePlace(place: PlacesI): void {
    this.placesService.deletePlace(place.id).subscribe(() => {
      this.getPlaces();
    });
  }
}
