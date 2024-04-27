import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Game } from 'src/app/interfaces/Game.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  juegos: any[] = []

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const gotyCollection = collection(this.firestore, 'goty');
    collectionData(gotyCollection)
    .pipe(
      map((resp: any[]) => resp.map( ({name, votos}) => ({name, value: votos})))
    )
    .subscribe(juegos => {
      this.juegos = juegos;
    })
  }

}
