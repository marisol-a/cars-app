import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { ICar, ICarsResponse } from 'src/app/domain/models/car/car.model';
import { CarGateway } from 'src/app/domain/models/car/gateway/car.gateway';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService extends CarGateway {
  constructor(private http: HttpClient) {
    super();
  }

  getCars(): Observable<ICarsResponse> {
    return this.http
      .get<ICarsResponse>(environment.apiCars)
      .pipe(shareReplay());
  }

  // addCar(car: ICar): Observable<ICar> {
  //   return of();
  // }
}
