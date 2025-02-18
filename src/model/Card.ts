// Enumerated 
export enum CardName {
  UP = "u.jpg",
  DOWN = "d.jpg",
  RIGHT = "r.jpg",
  LEFT = "l.jpg"
}

const ASSET_ROOT = "assets";

export class Card {
  private _name: string;
  private _asset: string;

  public constructor(c: CardName) {
    this._name = c.toString();
    this._asset = `${ASSET_ROOT}/${c.valueOf()}`;
    console.log(this._asset);
  }

  public get name() {
    return this._name;
  }

  public get asset() {
    return this._asset;
  }

  static make(c: CardName) {
    return new Card(c);
  }
}