import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavEvent = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Dark Souls 3'

    },
    {
      id: 2,
      name: 'Bloodbourne'

    },
    {
      id: 3,
      name: 'Sekiro'

    }
  ]

  fav(gameName:string){
    //alert(`el juego ${gameName} le gusta a ${this.username}`)
    this.addFavEvent.emit(gameName)
  }
}
