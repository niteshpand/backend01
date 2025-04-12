import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustompreloadService implements PreloadingStrategy {
  constructor() {}
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      if (route.data['delay']) {
        return timer(5000).pipe(mergeMap(() => load()));
      }
      return load();
    }
    return of(null);
  }
}
