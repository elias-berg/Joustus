import { Card, CardName } from './Card';
import { Deck } from './Deck';

describe("Deck", () => {
  describe("shuffle", () => {
    test("Shuffles appropriately", () => {
      const d = new Deck([new Card(CardName.UP), new Card(CardName.DOWN)]);
      d.shuffle();
      expect(true) // Just make sure it doesn't error out!
    })

    test("Draw works", () => {
      const d = Deck.makeBaseDeck();
      d.shuffle();
      const first = d.draw();
      expect(!!first);
      expect(first?.name === "UP" || first?.name === "DOWN" || first?.name === "LEFT" || first?.name === "RIGHT");
      // We should also be able to draw 19 more times
      for (let i = 0; i < 19; i++) {
        expect(!!d.draw());
      }
      expect(d.draw() === undefined);
    })
  })
})