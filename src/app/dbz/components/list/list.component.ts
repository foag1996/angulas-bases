import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

@Input ()
 public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // OnDelete  = Index value : number

  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();


  OnDeleteCharacter(id?: string): void {

    if (!id) return;

    console.log ({id});
    this.OnDelete.emit(id);
  }

}
