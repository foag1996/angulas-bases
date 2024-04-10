import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule ({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent //se hace para que se pueda utilizar fuera de este modulo osea el mundo exterior
  ]
})
export class CounterModule {}
