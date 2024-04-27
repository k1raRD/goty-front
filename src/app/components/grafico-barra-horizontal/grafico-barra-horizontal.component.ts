import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  interval$: Observable<number> = interval(2500);
  intervalSub: Subscription;
  
  results: any = [
    {
      "name": "Germany",
      "value": 20
    },
    {
      "name": "USA",
      "value": 25
    },
    {
      "name": "France",
      "value": 15
    },
    {
      "name": "dasdasd",
      "value": 15
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  colorScheme = 'nightLights';

  constructor() {
    this.intervalSub =  this.interval$.subscribe(val => {
      const newResults = [...this.results];

      for(let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500) ;
      }

      this.results = [...newResults];
    })
    
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  onSelect(event: any) {
    console.log(event);
  }
}