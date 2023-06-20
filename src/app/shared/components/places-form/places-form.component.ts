import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
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
import { Province } from 'src/app/core/models/types/region-type';
import { PROVINCE_ARRAY } from 'src/app/core/models/constants/constants';
import { Region } from 'src/app/core/models/types/region-type';
import { REGION_ARRAY } from 'src/app/core/models/constants/constants';

@Component({
  selector: 'app-places-form',
  templateUrl: './places-form.component.html',
  styleUrls: ['./places-form.component.scss'],
})
export class PlacesFormComponent implements OnInit {
  @Input() public place?: PlacesI;
  @Output() public placesFormDirty: EventEmitter<void> = new EventEmitter();

  public provinceArray: Province[] = PROVINCE_ARRAY;
  public regionArray: Region[] = REGION_ARRAY;

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

    this.placesForm?.valueChanges.subscribe(() => {
      if (this.placesForm?.dirty) {
        this.placesFormDirty.emit();
      }
    });
  }

  //Validator Controls

  get nameControl() {
    return this.placesForm?.get('name');
  }

  get provinceControl() {
    return this.placesForm?.get('province');
  }

  get regionControl() {
    return this.placesForm?.get('region');
  }

  get descriptionControl() {
    return this.placesForm?.get('description');
  }

  get longDescriptionControl() {
    return this.placesForm?.get('long_description');
  }

  get mainImage() {
    return this.placesForm?.get('mainimg');
  }

  //ArrayForms

  get activitiesArray() {
    return this.placesForm?.get('activities') as FormArray;
  }

  get imagesArray() {
    return this.placesForm?.get('images') as FormArray;
  }

  public addNewActivity() {
    if (this.activitiesArray.length < 3) {
      this.activitiesArray.push(
        this.fb.group({
          name: new FormControl(''),
          description: new FormControl(''),
          type: new FormControl(''),
        })
      );
    }
  }

  public putActivities() {
    if (this.place?.activities) {
      this.place?.activities.forEach((activity) => {
        this.activitiesArray.push(
          this.fb.group({
            name: new FormControl(activity.name),
            description: new FormControl(activity.description),
            type: new FormControl(activity.type),
          })
        );
      });
    } else {
      this.activitiesArray.push(
        this.fb.group({
          name: new FormControl(''),
          description: new FormControl(''),
          type: new FormControl(''),
        })
      );
    }
  }

  public addNewImage() {
    if (this.imagesArray.length < 4) {
      const id = (this.imagesArray.length + 1).toString();
      this.imagesArray.push(
        this.fb.group({
          id: new FormControl(id),
          url: new FormControl(''),
        })
      );
    }
  }

  public putImages() {
    if (this.place?.images) {
      this.place?.images.forEach((image) => {
        this.imagesArray.push(
          this.fb.group({
            id: new FormControl(image.id),
            url: new FormControl(image.url),
          })
        );
      });
    } else {
      this.imagesArray.push(
        this.fb.group({
          id: new FormControl('1'),
          url: new FormControl(''),
        })
      );
    }
  }

  public newCustomPlace() {
    if (this.placesForm?.valid) {
      const newPlaceRequest = this.place
        ? this.placesService.putPlace(this.place.id, this.placesForm.value)
        : this.placesService.postPlace({
            ...this.placesForm?.value,
            isCustom: true,
          });
      newPlaceRequest.subscribe((place: PlacesI) => {
        console.log(place);
        this.placesForm?.reset();
        this.router.navigateByUrl('user-list');
      });
    }
  }
}
