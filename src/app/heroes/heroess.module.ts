import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule ({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent//se hace para que se pueda utilizar fuera de este modulo osea el mundo exterior
  ],
  imports: [
    CommonModule,
  ]
})
export class HeroesModule {}


