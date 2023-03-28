import { Component, OnInit } from '@angular/core';
import {LoginService} from "../core/login.service";

@Component({
  selector: 'steelcoin-chart-screen',
  templateUrl: './chart-screen.component.html',
  styleUrls: ['./chart-screen.component.scss']
})
export class ChartScreenComponent implements OnInit {

  constructor(
      public loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

}
