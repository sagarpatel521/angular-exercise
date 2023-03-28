import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervalSelectorComponent } from './interval-selector/interval-selector.component';
import { BuyPriceChartComponent } from './buy-price-chart/buy-price-chart.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ChartScreenComponent } from './chart-screen/chart-screen.component';
import {NgChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    IntervalSelectorComponent,
    BuyPriceChartComponent,
    LoginScreenComponent,
    ChartScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
