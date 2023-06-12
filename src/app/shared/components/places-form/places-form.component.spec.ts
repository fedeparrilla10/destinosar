import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesFormComponent } from './places-form.component';

describe('PlacesFormComponent', () => {
  let component: PlacesFormComponent;
  let fixture: ComponentFixture<PlacesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesFormComponent]
    });
    fixture = TestBed.createComponent(PlacesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
