import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RangeMode } from '../models/interval-selector';
import { SteelCoinPrice, SteelCoinPriceResponse } from '../models/steel-coin-price';

@Injectable({
  providedIn: 'root'
})
export class SteelCoinPriceService {

  constructor(private readonly httpClient: HttpClient) { }

  public getSteelCoinPricesByInterval(from: string, to: string, resolution: RangeMode): Observable<SteelCoinPrice> {
    const params = {from, to, resolution};
    return this.httpClient.post<SteelCoinPriceResponse>(
      `${environment.apiUrl}/data/steelcoin/legacy/volume-weighted-average`, params).pipe(
        map(response => response.payload)
    );
  }
}
