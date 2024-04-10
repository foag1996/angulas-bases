import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public herosName: string[]=['Spiderman','Ironman','Hulk','She huelk','Thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.herosName.pop();
    //console.log({deletedHero});
  }
}
