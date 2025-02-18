import { Card } from "./Card";
import { Deck } from "./Deck";

export class Player {
  private _hand: [Card, Card, Card];
  private _deck: Deck;

  public constructor() {
    // For now, use the base deck
    this._deck = Deck.makeBaseDeck();
    this._deck.shuffle();
    this._hand = [
      this._deck.draw()!,
      this._deck.draw()!,
      this._deck.draw()!
    ];
  }

  public get hand() {
    return this._hand;
  }
}