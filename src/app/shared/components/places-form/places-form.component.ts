import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PlacesI } from 'src/app/core/models/interfaces/places-interface';
import { PlacesService } from '../../../core/services/places.service';

@Component({
  selector: 'app-places-form',
  templateUrl: './places-form.component.html',
  styleUrls: ['./places-form.component.scss'],
})
export class PlacesFormComponent {
  public placesForm?: FormGroup;

  constructor(private fb: FormBuilder, private placesService: PlacesService) {
    this.placesForm = this.fb.group({
      name: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      long_description: new FormControl('', Validators.required),
      activities: this.fb.array([
        this.fb.group({
          name: new FormControl(''),
          description: new FormControl(''),
          type: new FormControl(''),
        }),
      ]),
      mainimg: new FormControl('', Validators.required),
      images: this.fb.array([
        this.fb.group({
          id: new FormControl(''),
          url: new FormControl(''),
        }),
      ]),
    });
  }

  get activities() {
    return this.placesForm?.get('activities') as FormArray;
  }

  get images() {
    return this.placesForm?.get('images') as FormArray;
  }

  addActivity() {
    this.activities.push(
      this.fb.group({
        name: new FormControl(''),
        description: new FormControl(''),
        type: new FormControl(''),
      })
    );
  }

  addImage() {
    this.images.push(
      this.fb.group({
        id: new FormControl(''),
        url: new FormControl(''),
      })
    );
  }

  newCustomPlace() {
    if (this.placesForm?.valid) {
      const newPlaceRequest = this.placesService.postPlace(
        this.placesForm?.value
      );
      newPlaceRequest.subscribe((place: PlacesI) => {
        this.placesForm?.reset();
      });
    }
  }
}
