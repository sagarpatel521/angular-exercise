import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";

export interface LineDataSet {
  rgbColor: string;
  values: number[];
  label: string;
  labelUnit?: string;
}

export interface LineChartData {
  xAxisLabels: string[];
  datasets: LineDataSet[];
}

@Component({
  selector: 'steelcoin-buy-price-chart',
  templateUrl: './buy-price-chart.component.html',
  styleUrls: ['./buy-price-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyPriceChartComponent implements OnChanges {
  @Input()
  public data: LineChartData| undefined;

  public lineChartType: ChartType = 'line';
  
  public lineChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [],
  };
  
  public lineChartOptions: ChartConfiguration['options'] = this.getLineChartConfiguration();

  public ngOnChanges(): void {
    this.lineChartData = this.getLineChartDataConfig();
    this.lineChartOptions = this.getLineChartConfiguration();
  }

  private getLineChartDataConfig(): ChartConfiguration['data'] {
    return {
      labels: this.data?.xAxisLabels,
      datasets: this.data ? this.data.datasets.map(dataset => ({
        label: dataset.label,
        data: dataset.values,
        borderColor: `rgb(${dataset.rgbColor})`,
        pointHoverBorderColor: `rgb(${dataset.rgbColor})`,
        fill: 'false',
      })) : [],
    };
  }

  private getLineChartConfiguration(): ChartConfiguration['options'] {

    const labelToolTip = (context:any): string => {
      let labelYValue = '';
      this.data?.datasets.forEach(dataset => {
        if (context.parsed.y !== null && dataset.labelUnit) {
          labelYValue = dataset.labelUnit + ' ' + context.parsed.y;
        } else if (context.parsed.y !== null) {
          labelYValue = context.parsed.y;
        } else {
          labelYValue = '---';
        }
      });
      return labelYValue;
    };

    return {
      animation: false,
      maintainAspectRatio: false,
      scales: {
        y: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            color: '#cecfd3',
            font: {
              family: 'Poppins',
              size: 10,
              weight: '500',
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
          },
          ticks: {
            color: '#cecfd3',
            stepSize: 0.3,
            font: {
              family: 'Poppins',
              size: 10,
              weight: '500',
            },
          },
        },
      },
      hover: {
        intersect: false
      },
      elements: {
        point: {
          hoverRadius: 6,
          radius: 0
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          yAlign: 'top',
          displayColors: false,
          backgroundColor: 'white',
          boxPadding: 10,
          padding: 10,
          titleColor: '#7C8193',
          titleMarginBottom: 4,
          titleFont: {
            size: 12,
            weight: '500',
            family: 'Poppins',
          },
          caretPadding: 10,
          caretSize: 8,
          cornerRadius: 6,
          intersect: false,
          bodyFont: {
            size: 14,
            weight: '500',
            family: 'Poppins',
          },
          callbacks: {
            label: labelToolTip,
            labelTextColor: (): string => '#1D1E25',
          },
        },
      },
    };
  }

}
