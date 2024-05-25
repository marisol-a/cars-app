import { Injectable } from '@angular/core';
import { ICar, ICarsResponse } from '../car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CarGateway {
  abstract getCars(): Observable<ICarsResponse>;
  //abstract editCar(id: number, car: Partial<ICar>): any;
}
