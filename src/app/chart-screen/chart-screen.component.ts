import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap} from 'rxjs';
import { LineChartData } from '../buy-price-chart/buy-price-chart.component';
import { DateRangeState, IntervalOption, RangeLabel, RangeMode } from '../core/models/interval-selector';
import { CoinPriceData } from '../core/models/steel-coin-price';
import { SteelCoinPriceService } from '../core/services/steel-coin-price.service';

@Component({
  selector: 'steelcoin-chart-screen',
  templateUrl: './chart-screen.component.html',
  styleUrls: ['./chart-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartScreenComponent {

  public readonly segmentOptions:IntervalOption[]  = [
    { label: RangeLabel.SevenDays, value: RangeMode.days },
    { label: RangeLabel.ThirtyDays, value: RangeMode.days },
    { label: RangeLabel.SixtyDays, value: RangeMode.days },
    { label: RangeLabel.MaxMonths, value: RangeMode.days },
  ];

  public readonly rangeMode$: BehaviorSubject<DateRangeState | undefined> = new BehaviorSubject<DateRangeState | undefined>(undefined);

  public readonly steelCoinPriceDetails$: Observable<CoinPriceData[] | undefined> = this.rangeMode$.pipe(
    switchMap(data => {
      return data ? this.steelCoinPricesService.getSteelCoinPricesByInterval(data.startDate, data.endDate, data.rangeMode).pipe(
        map(res => res.data)) : of(undefined)
    }
  ));;

  public readonly latestCoinPrice$: Observable<number | undefined> =  this.steelCoinPriceDetails$.pipe(
    switchMap(res => {
      return res ? of( Math.round(res[res.length - 1].buyPrice * 100) / 100) : of(undefined)
    })
  )

  constructor(private readonly steelCoinPricesService: SteelCoinPriceService) { }

  public changeDateRangeMode(option: DateRangeState): void {
    this.rangeMode$.next(option);
  }

  public getLineChartData(coinPriceDetails: CoinPriceData[]): LineChartData{
    const chartLabels = coinPriceDetails.map(m => this.formatLabel(m.date));
    const chartValues = coinPriceDetails.map(m => Math.round(m.buyPrice * 100) / 100);
    
    return {
      xAxisLabels: chartLabels,
      datasets: [
        {
          rgbColor: '229, 255, 125',
          values: chartValues,
          label: 'Historic Steelcoin Prices',
          labelUnit: '€',
        },
      ],
    };
  }

  private formatLabel(date: string): string {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  }

}