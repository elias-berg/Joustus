import { CardName } from "../types";
import Card from "./Card";

export class Deck {
  // The cards that comprise the deck, in no particular order.
  private _cards: Card[];
  // A shuffled version of the cards comprising the deck, for playing.
  private _deck: Card[];

  public constructor(cards: Card[]) {
    this._cards = cards;
    this._deck = [];
  }

  private randomIdx(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public shuffle() {
    this._deck = [];
    let toShuffle = this._cards.slice();
    while (toShuffle.length > 0) {
      const idx = this.randomIdx(0, toShuffle.length - 1);
      const card = toShuffle[idx];
      toShuffle = toShuffle.slice(0, idx).concat(...toShuffle.slice(idx + 1))
      this._deck.push(card);
    }
    console.log(this._deck)
  }

  public draw() {
    if (this._deck.length === 0) {
      return undefined;
    }
    return this._deck.pop();
  }

  public length() {
    return this._deck.length;
  }

  public static makeBaseDeck() {
    return new Deck([
      new Card(CardName.UP),
      new Card(CardName.UP),
      new Card(CardName.UP),
      new Card(CardName.UP),
      new Card(CardName.DOWN),
      new Card(CardName.DOWN),
      new Card(CardName.DOWN),
      new Card(CardName.DOWN),
      new Card(CardName.LEFT),
      new Card(CardName.LEFT),
      new Card(CardName.LEFT),
      new Card(CardName.LEFT),
      new Card(CardName.RIGHT),
      new Card(CardName.RIGHT),
      new Card(CardName.RIGHT),
      new Card(CardName.RIGHT),
    ]);
  }
}