import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopInfoComponent } from './develop-info.component';

describe('DevelopInfoComponent', () => {
  let component: DevelopInfoComponent;
  let fixture: ComponentFixture<DevelopInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopInfoComponent]
    });
    fixture = TestBed.createComponent(DevelopInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
