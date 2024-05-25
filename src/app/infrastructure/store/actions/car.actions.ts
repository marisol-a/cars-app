import { createAction, props } from '@ngrx/store';
import { ICar } from 'src/app/domain/models/car/car.model';

export const getCars = createAction('[Cars] Get cars');
export const setCars = createAction(
  '[Cars] Set cars',
  props<{ cars: ICar[] }>()
);
export const addCar = createAction('[Cars] Add car', props<{ car: ICar }>());
