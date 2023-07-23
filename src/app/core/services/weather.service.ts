import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ApiWeatherI,
  Forecastday,
} from '../models/interfaces/weather-interface';
import { WeatherI, DayI } from '../models/interfaces/weather-interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public BASE_URL =
    'https://api.weatherapi.com/v1/forecast.json?key=3c8a83db797c409db85123728231806&';

  constructor(private http: HttpClient) {}

  public getWeatherData(placeName: string): Observable<WeatherI[]> {
    return this.http
      .get<ApiWeatherI>(
        `${this.BASE_URL}q=${placeName}&days=5&aqi=no&alerts=no`
      )
      .pipe(
        map((weather: ApiWeatherI) => {
          const weatherData: WeatherI[] = [
            {
              location: weather.location,
              forecast: {
                forecastday: weather.forecast.forecastday.map(
                  (forecastday: Forecastday) => {
                    const day: DayI = {
                      maxtemp_c: forecastday.day.maxtemp_c,
                      mintemp_c: forecastday.day.mintemp_c,
                      condition: forecastday.day.condition,
                    };
                    return {
                      date: forecastday.date,
                      day: day,
                    };
                  }
                ),
              },
            },
          ];
          return weatherData;
        })
      );
  }
}
