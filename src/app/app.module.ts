import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervalSelectorComponent } from './interval-selector/interval-selector.component';
import { BuyPriceChartComponent } from './buy-price-chart/buy-price-chart.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ChartScreenComponent } from './chart-screen/chart-screen.component';
import {NgChartsModule} from "ng2-charts";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './core/guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    IntervalSelectorComponent,
    BuyPriceChartComponent,
    LoginScreenComponent,
    ChartScreenComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
