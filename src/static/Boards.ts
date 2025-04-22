import { Board } from "../model/Board";
import { SpaceType } from "../types";

export const BasicBoard2x2 = () => new Board([
  [
    SpaceType.DEAD,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.DEAD,
  ],
  [
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OPEN,
    SpaceType.OPEN,
    SpaceType.OUT_OF_BOUNDS,
  ],
  [
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OPEN,
    SpaceType.OPEN,
    SpaceType.OUT_OF_BOUNDS,
  ],
  [
    SpaceType.DEAD,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.DEAD,
  ],
]);

export const BasicBoard3x3 = () => new Board([
  [
    SpaceType.DEAD,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.DEAD,
  ],
  [
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OPEN,
    SpaceType.OPEN,
    SpaceType.OPEN,
    SpaceType.OUT_OF_BOUNDS,
  ],
  [
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OPEN,
    SpaceType.OPEN,
    SpaceType.OPEN,
    SpaceType.OUT_OF_BOUNDS,
  ],
  [
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OPEN,
    SpaceType.OPEN,
    SpaceType.OPEN,
    SpaceType.OUT_OF_BOUNDS,
  ],
  [
    SpaceType.DEAD,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.OUT_OF_BOUNDS,
    SpaceType.DEAD,
  ],
]);