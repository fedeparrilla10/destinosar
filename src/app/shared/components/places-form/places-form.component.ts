import { Component, Input, OnInit } from '@angular/core';
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
export class PlacesFormComponent implements OnInit {
  @Input() public place?: PlacesI;

  public placesForm?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private placesService: PlacesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.generatePlacesForm();
    this.putActivities();
    this.putImages();
  }

  generatePlacesForm() {
    this.placesForm = this.fb.group({
      name: new FormControl(this.place?.name || '', Validators.required),
      province: new FormControl(
        this.place?.province || '',
        Validators.required
      ),
      region: new FormControl(this.place?.region || '', Validators.required),
      description: new FormControl(
        this.place?.description || '',
        Validators.required
      ),
      long_description: new FormControl(
        this.place?.long_description || '',
        Validators.required
      ),
      activities: this.fb.array([]),
      mainimg: new FormControl(this.place?.mainimg || '', Validators.required),
      images: this.fb.array([]),
    });
  }

  get activities() {
    return this.placesForm?.get('activities') as FormArray;
  }

  get images() {
    return this.placesForm?.get('images') as FormArray;
  }

  addNewActivity() {
    if (this.activities.length < 3) {
      this.activities.push(
        this.fb.group({
          name: new FormControl(''),
          description: new FormControl(''),
          type: new FormControl(''),
        })
      );
    }
  }

  putActivities() {
    if (this.place?.activities) {
      this.place?.activities.forEach((activity) => {
        this.activities.push(
          this.fb.group({
            name: new FormControl(activity.name),
            description: new FormControl(activity.description),
            type: new FormControl(activity.type),
          })
        );
      });
    } else {
      this.activities.push(
        this.fb.group({
          name: new FormControl(''),
          description: new FormControl(''),
          type: new FormControl(''),
        })
      );
    }
  }

  addNewImage() {
    if (this.images.length < 4) {
      const id = (this.images.length + 1).toString();
      this.images.push(
        this.fb.group({
          id: new FormControl(id),
          url: new FormControl(''),
        })
      );
    }
  }

  putImages() {
    if (this.place?.images) {
      this.place?.images.forEach((image) => {
        this.images.push(
          this.fb.group({
            id: new FormControl(image.id),
            url: new FormControl(image.url),
          })
        );
      });
    } else {
      this.images.push(
        this.fb.group({
          id: new FormControl('1'),
          url: new FormControl(''),
        })
      );
    }
  }

  newCustomPlace() {
    if (this.placesForm?.valid) {
      const newPlaceRequest = this.place
        ? this.placesService.putPlace(this.place.id, this.placesForm.value)
        : this.placesService.postPlace(this.placesForm?.value);
      newPlaceRequest.subscribe((place: PlacesI) => {
        this.placesForm?.reset();
        this.router.navigateByUrl('user-list');
      });
    }
  }
}
