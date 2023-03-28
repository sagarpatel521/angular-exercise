import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'steelcoin-interval-selector',
  templateUrl: './interval-selector.component.html',
  styleUrls: ['./interval-selector.component.scss']
})
export class IntervalSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    alert('Loading Data and updating diagram still needs to be implement')
  }
}
