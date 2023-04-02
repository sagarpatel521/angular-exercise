import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateRangeState, IntervalOption, RangeLabel, RangeMode } from '../core/models/interval-selector';

@Component({
  selector: 'steelcoin-interval-selector',
  templateUrl: './interval-selector.component.html',
  styleUrls: ['./interval-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntervalSelectorComponent implements OnInit {

  @Input()
  public set intervalOptions(intervalOptions: IntervalOption[]) {
    this.intervalOptionStore = intervalOptions;
  }

  @Input()
  public set selectedInterval(selectedInterval: IntervalOption) {
    this.selectedIntervalValue = selectedInterval;
  }

  @Output()
  public intervalChange = new EventEmitter<DateRangeState>();

  public intervalOptionStore: IntervalOption[] = [];
  public selectedIntervalValue: IntervalOption = { label: RangeLabel.SevenDays, value: RangeMode.days };

  public ngOnInit(): void {
    const intervalDateState = this.getDatesByRangeMode(this.selectedIntervalValue);
    this.intervalChange.emit(intervalDateState);
  }

  public onIntervalChange(interval: IntervalOption): void {
    if (this.selectedIntervalValue.label !== interval.label) {
      this.selectedIntervalValue = interval;
      const intervalDateState = this.getDatesByRangeMode(interval);
      this.intervalChange.emit(intervalDateState);
    }
  }

  public isSelectedInterval(label: string): boolean {
    const selectedLabel = this.selectedIntervalValue.label;
    return label === selectedLabel;
  }
  

  public getDatesByRangeMode(interval: IntervalOption): DateRangeState{
    const {label: rangeLabel, value: rangeMode} = interval;
    const today = new Date();
    let startDate: string;
    let endDate: string;

    switch (rangeLabel) {
      case RangeLabel.SevenDays:
        startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
        endDate = today.toISOString();
        rangeLabel;
        rangeMode 
        break;

      case RangeLabel.ThirtyDays:
        startDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();
        endDate = today.toISOString();
        rangeLabel;
        rangeMode
        break;

      case RangeLabel.SixtyDays:
        startDate = new Date(today.getTime() - 2 * 30 * 24 * 60 * 60 * 1000).toISOString();
        endDate = today.toISOString();
        rangeLabel;
        rangeMode
        break;

      case RangeLabel.MaxMonths:
        startDate = '2022-10-01T11:00:59.879Z'; // earliest possible date hard coded
        endDate = today.toISOString();
        rangeLabel;
        rangeMode
        break;

      default:
        throw new Error(`Invalid range label "${rangeLabel}".`);
    }

    return { startDate, endDate, rangeLabel, rangeMode };
  }
}