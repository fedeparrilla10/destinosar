import { Component, OnInit } from '@angular/core';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public allPlaces: PlacesI[] = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.getPlaces();
  }

  private getPlaces(): void {
    this.placesService.getPlaces().subscribe((places: PlacesI[]) => {
      this.allPlaces = places;
    });
  }
}
