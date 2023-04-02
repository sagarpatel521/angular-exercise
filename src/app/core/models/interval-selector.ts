export enum RangeLabel {
    SevenDays = '7 D',
    ThirtyDays = '30 D',
    SixtyDays = '60 D',
    MaxMonths = 'MAX',
}

export enum RangeMode {
    days = 'DAYS',
    months = 'MONTHS',
}

export interface IntervalOption {
    label: RangeLabel,
    value: RangeMode
}
  
export interface DateRangeState { 
    startDate: string, 
    endDate: string, 
    rangeLabel: RangeLabel,
    rangeMode: RangeMode
}