import { SpaceType } from "../types";
import Card from "./Card";

class Space {
  _type: SpaceType;
  _card?: Card;
  constructor(type: SpaceType) {
    this._type = type;
    this._card = undefined;
  }

  get type() {
    return this._type;
  }

  get card() {
    return this._card;
  }

  addCard(card: Card) {
    this._card = card;
  }
}

export class Board {
  _spaces: Space[][];
  _gems?: {x: number, y: number}[];

  constructor(board: SpaceType[][]) {
    this._spaces = [];
    board.forEach((row) => {
      const idx = this._spaces.length;
      this._spaces.push([]);
      this._spaces[idx] = [];
      row.forEach((type) => {
        this._spaces[idx].push(new Space(type));
      })
    });
  }

  get spaces() {
    return this._spaces;
  }
}