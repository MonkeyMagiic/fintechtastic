export interface IPrice
{
  /**
   * The maximum price that a buyer or buyers are willing to pay for a security.
   * @returns {number}
   */
  bid:number;

  /**
   * The minimum price that a seller or sellers are willing to pay for a security.
   * @returns {number}
   */
  ask:number;

  /**
   * The median average of the bid and ask.
   * @returns {number}
   */
  mid:number;

  /**
   * The difference between the bid and the ask price for the security.
   * @returns {number}
   */
  spread:number;
}

export class Price implements IPrice
{
  constructor(bid:number, ask:number, precision:number) {
    this._bid = bid;
    this._ask = ask;
    this._mid = (this._bid + this._ask) / 2;
    this._spread = (this._ask - this._bid) * Math.pow(10, precision);
  }

  private _bid:number;

  public get bid():number {
    return this._bid;
  }

  private _ask:number;

  public get ask():number {
    return this._ask;
  }

  private _mid:number;

  public get mid():number {
    return this._mid;
  }

  private _spread:number;

  public get spread():number {
    return this._spread;
  }
}
