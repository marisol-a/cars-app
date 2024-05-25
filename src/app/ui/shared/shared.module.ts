import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './components/car/car.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { SortCarsPipe } from './pipes/sort-cars.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarComponent,
    CarListComponent,
    CarFormComponent,
    SortCarsPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CarListComponent, CarFormComponent],
})
export class SharedModule {}
