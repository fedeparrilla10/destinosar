import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public _loading = new BehaviorSubject<boolean>(false);

  constructor() {}

  public showLoading() {
    this._loading.next(true);
  }

  public hideLoading() {
    this._loading.next(false);
  }
}
