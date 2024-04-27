import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Game } from 'src/app/interfaces/Game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit{

  games: Game[] = [];

  constructor(private gameService: GameService,
              private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.gameService.getNominados().subscribe(games => {
      this.games = games;
    })
  }

  votarJuego(game: Game) {
    if(!game.id) {
      return;
    }
    this.gameService.votarJuego(game.id).subscribe((resp: {ok: boolean, mensaje: string}) => {
        if(resp.ok ) {
          this.toast.success('Gracias por su voto!!',  {
            icon: '👏',
            position: 'top-center',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        } else {
          this.toast.error("Oops this didn't work.", {
            position: 'top-center',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
    });
  }

}
