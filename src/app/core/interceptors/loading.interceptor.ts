import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

const HIDE_COMPONENT = ['https://64807d55f061e6ec4d495f1f.mockapi.io/places'];

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();
    return next.handle(request).pipe(
      finalize(() => {
        if (!HIDE_COMPONENT.includes(request.url))
          this.loadingService.hideLoading();
      })
    );
  }
}
