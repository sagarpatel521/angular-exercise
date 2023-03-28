import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";

@Component({
  selector: 'steelcoin-buy-price-chart',
  templateUrl: './buy-price-chart.component.html',
  styleUrls: ['./buy-price-chart.component.scss']
})
export class BuyPriceChartComponent implements OnInit {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Historic Steelcoin Prices (Fake Data still)',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [ 'January', 'February', 'March', 'Monday 27.3.', 'Tuesday 28.3.', 'Wednesday 29.3.', 'Thursday 30.3.' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
          {
            position: 'left',
          },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
    }
  };

  public lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

}
