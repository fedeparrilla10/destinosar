import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPlacesI, PlacesI } from '../models/interfaces/places-interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public BASE_URL = 'https://64807d55f061e6ec4d495f1f.mockapi.io/';

  constructor(private http: HttpClient) {}

  public getPlaces(): Observable<PlacesI[]> {
    return this.http.get<ApiPlacesI[]>(`${this.BASE_URL}/places`).pipe(
      map((places: ApiPlacesI[]) => {
        return places.map((place) => {
          delete place.createdAt;
          delete place.language;
          delete place.latitude;
          delete place.longitude;
          delete place.population;
          return place;
        });
      })
    );
  }

  public getPlace(id: string): Observable<PlacesI> {
    return this.http.get<ApiPlacesI>(`${this.BASE_URL}/places/${id}`);
  }

  public postPlace(formBody: PlacesI): Observable<PlacesI> {
    return this.http.post<PlacesI>(`${this.BASE_URL}/places`, formBody);
  }

  public putPlace(id: string, formBody: PlacesI): Observable<PlacesI> {
    return this.http.put<PlacesI>(`${this.BASE_URL}/places/${id}`, formBody);
  }

  public deletePlace(id: string): Observable<PlacesI> {
    return this.http.delete<PlacesI>(`${this.BASE_URL}/places/${id}`);
  }
}
