import { Action, createReducer, on } from '@ngrx/store';
import * as carActions from '../actions/car.actions';
import { ICar } from 'src/app/domain/models/car/car.model';

export interface State {
  cars: ICar[];
}

export const initialState: State = {
  cars: [],
};

export const scoreboardReducer = createReducer(
  initialState,
  on(carActions.getCars, (state) => ({ ...state })),
  on(carActions.setCars, (state, ) => ({ ...state })),
  on(carActions.addCar, (state, { car: ICar }) => ({
    ...state,
    cars: [...state.cars],
  }))
);
