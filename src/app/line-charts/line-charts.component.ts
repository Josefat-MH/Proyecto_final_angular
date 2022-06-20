import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartType, Color, } from 'chart.js';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.css']
})
export class LineChartsComponent implements OnInit {
  lineChartData: ChartDataset[]= [
    {data: [30,60,50,100,250,100], label:'POPULARIDAD SEMANAL'},
  

  ];

  lineChartLabels: String [] = [ 'Foreo','LOREAL','Rude cosmetic','Mac cosmetic','Maybelline']; 
  lineChartOptions = {responsive: true,};

 
  lineChartLegend = true;
  lineChartPlugins =[];


  constructor() { }

  ngOnInit(): void {
  }
  grafico(){
    this.lineChartData = [
      {data: [Math.random()*(100-0)+0,50,60,100,150,250,100], label:'POLPULARIDAD SEMANAL'},
    ];
  }
}
