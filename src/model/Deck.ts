import { Card, CardName } from "./Card";

export class Deck {
  // The cards that comprise the deck, in no particular order.
  private _cards: Card[];
  // A shuffled version of the cards comprising the deck, for playing.
  private _deck: Card[];

  public constructor(cards: Card[]) {
    this._cards = cards;
  }

  private randomIdx(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public shuffle() {
    this._deck = [];
    let toShuffle = this._cards.slice();
    while (toShuffle.length > 0) {
      const idx = this.randomIdx(0, toShuffle.length);
      const card = toShuffle[idx];
      toShuffle = toShuffle.slice(0, idx).concat(toShuffle.slice(idx + 1))
      this._deck.push(card);
    }
  }

  public draw() {
    const card = this._deck.pop();
    return card;
  }

  public length() {
    return this._deck.length;
  }

  public static makeBaseDeck() {
    return new Deck([
      Card.make(CardName.UP),
      Card.make(CardName.UP),
      Card.make(CardName.UP),
      Card.make(CardName.UP),
      Card.make(CardName.DOWN),
      Card.make(CardName.DOWN),
      Card.make(CardName.DOWN),
      Card.make(CardName.DOWN),
      Card.make(CardName.LEFT),
      Card.make(CardName.LEFT),
      Card.make(CardName.LEFT),
      Card.make(CardName.LEFT),
      Card.make(CardName.RIGHT),
      Card.make(CardName.RIGHT),
      Card.make(CardName.RIGHT),
      Card.make(CardName.RIGHT),
    ]);
  }
}