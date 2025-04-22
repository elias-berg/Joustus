import { CardName } from "../types";

export class Card {
  _name: CardName;
  _push: { x: number, y: number }[];

  constructor(name: CardName) {
    this._name = name;
    this._push = this._getPushFromName(name);
  }

  get name() {
    return this._name;
  }

  _getPushFromName(name: CardName) {
    switch (name) {
      case CardName.UP:
        return [{ x: 0, y: -1 }];
      case CardName.DOWN:
        return [{ x: 0, y: 1 }];
      case CardName.LEFT:
        return [{ x: -1, y: 0 }];
      case CardName.RIGHT:
        return [{ x: 1, y: 0 }];
      default:
        return [{ x: 0, y: 0 }];
    }
  }

  canBePushedFrom({x, y}: { x: number, y: number}): boolean {
    if (x > 0) {
      return !this._push.every((pos) => pos.x >= x);
    } else if (x < 0) {
      return !this._push.every((pos) => pos.x <= x);
    } else if (y > 0) {
      return !this._push.every((pos) => pos.y >= y);
    } else if (y < 0) {
      return !this._push.every((pos) => pos.y <= y);
    }
    return false;
  }
}

export default Card;