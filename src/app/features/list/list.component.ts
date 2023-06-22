import { Component, OnInit } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { Province } from 'src/app/core/models/types/region-type';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public allPlaces: PlacesI[] = [];
  public searchFilter: string = '';
  public selectedProvince: Province = '';

  constructor(private placesService: PlacesService) {}

  public ngOnInit(): void {
    this.getPlaces();
  }

  private getPlaces(): void {
    this.placesService.getPlaces().subscribe((places: PlacesI[]) => {
      this.allPlaces = places;
    });
  }

  public deletePlace(place: PlacesI): void {
    this.placesService.deletePlace(place.id).subscribe(() => {
      this.getPlaces();
    });
  }

  public findInputChanges(value: string) {
    this.searchFilter = value;
  }

  public findProvinceChanges(province: Province) {
    this.selectedProvince = province;
  }
}
