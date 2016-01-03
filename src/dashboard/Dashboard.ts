import {Component, OnInit} from 'angular2/core';
import {IPrice, Price} from '../pricing/models/Price';
import {PricingTile} from '../ui/PricingTile';

@Component({
  selector: 'dashboard',
  templateUrl: 'src/dashboard/default.dashboard.html',
  styleUrls: ['src/dashboard/default.dashboard.css'],
  directives: [PricingTile]
})
export class Dashboard implements OnInit {

  private _prices:IPrice[];

  public get prices():IPrice[] {
    return this._prices;
  }

  ngOnInit() {

    const createPrice:Function = () => {
      const precision:number = 3;
      const bid:number = 1.1 + Math.random() * 0.3;
      const ask:number = bid + Math.random() * 0.2;
      return new Price(
          parseFloat(bid.toFixed(precision)),
          parseFloat(ask.toFixed(precision)),
          precision);
    };

    // Create initial prices
    this._prices = [1, 2, 3, 4, 5, 6].map((index:number) => createPrice());

    // Ticking
    setInterval(() => {
      const position:number = Math.round(Math.random() * (this._prices.length - 1));
      this._prices.splice(position, 1, createPrice());
    }, 250);
  }

}