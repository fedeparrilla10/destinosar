import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { PlacesService } from 'src/app/core/services/places.service';
import { ActivitiesI } from 'src/app/core/models/interfaces/places-interface';
import { ImageI } from 'src/app/core/models/interfaces/places-interface';
import { WeatherI } from 'src/app/core/models/interfaces/weather-interface';
import { WeatherService } from 'src/app/core/services/weather.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss'],
})
export class PlaceDetailsComponent {
  public detailedPlace?: PlacesI;
  public detailedWeather?: WeatherI;
  public allImages?: ImageI[];
  public allActivities?: ActivitiesI[];
  public allWeather: WeatherI[] = [];

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private weatherService: WeatherService
  ) {
    this.route.params
      .pipe(
        switchMap((params) => {
          const id = params['id'];
          return this.placesService.getPlace(id);
        }),
        tap((detailedPlace: PlacesI) => {
          this.detailedPlace = detailedPlace;

          this.allImages = [...this.detailedPlace.images];
          this.allActivities = [...this.detailedPlace.activities];
        }),
        switchMap((detailedPlace: PlacesI) => {
          return this.weatherService.getWeatherData(detailedPlace.name);
        })
      )
      .subscribe((weather: WeatherI[]) => {
        this.detailedWeather = weather[0];
      });
  }
}
