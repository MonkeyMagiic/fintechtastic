import {Component, OnInit} from 'angular2/core';
import {IPrice, Price} from '../pricing/models/Price';

@Component({
  selector: 'pricingTile',
  templateUrl: 'src/ui/default.pricing-tile.html',
  styleUrls: ['src/ui/default.pricing-tile.css'],
  inputs: ['datum']
})
export class PricingTile implements OnInit {

  constructor() {
  }

  private _datum:IPrice;

  public get datum():IPrice {
    return this._datum;
  }

  public set datum(value:IPrice) {
    if (this._datum !== value) {
      this._datum = value;
    }
  }

  ngOnInit() {
  }
}