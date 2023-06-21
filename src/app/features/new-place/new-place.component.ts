import { Component } from '@angular/core';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.scss'],
})
export class NewPlaceComponent {
  public isDirty: boolean = false;
  public isValid: boolean = false;

  public setPlacesFormAsDirty() {
    this.isDirty = true;
  }

  public formIsValid() {
    this.isValid = true;
  }
}
