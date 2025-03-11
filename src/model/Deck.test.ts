import { CardName } from "../components/types";
import { Deck } from "./Deck";


describe("Deck", () => {
  describe("shuffle", () => {
    test("Shuffles appropriately", () => {
      const d = new Deck([CardName.UP, CardName.DOWN]);
      d.shuffle();
      expect(d.length()).toBe(2)
    })

    test("Draw works", () => {
      const d = Deck.makeBaseDeck();
      d.shuffle();
      let card = d.draw();
      expect(card).toBeDefined();
      // We should also be able to draw 19 more times
      for (let i = 0; i < 15; i++) {
        card = d.draw();
        expect(card).toBeDefined();
      }
      expect(d.draw() === undefined);
    })
  })
})