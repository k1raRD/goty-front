import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/Game.interface';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  juegos: Game[] = []

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getNominados(): Observable<Game[]> {
    if(this.juegos.length === 0) {
      return this.http.get<Game[]>(`${this.baseUrl}/api/goty`)
              .pipe(
                tap(juegos => this.juegos = juegos)
              );
    } else {
      return of(this.juegos);
    }
  }

  votarJuego(id: string) {
    return this.http.post<{ok: boolean, mensaje: string}>(`${this.baseUrl}/api/goty/${id}`, {})
      .pipe(
        catchError(err => {
          return of(err.error);
        })
      );
  }

}
