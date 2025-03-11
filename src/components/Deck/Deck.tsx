import { PlayerNumber } from "../types";
import styles from "./Deck.module.css";

interface DeckProps {
  which: PlayerNumber;
}

export const Deck = ({ which }: DeckProps) => {
  let classList = styles.deck;
  classList += which === PlayerNumber.ONE ? ` ${styles.p1}` : ` ${styles.p2}`;

  /* TODO: Stack it for the height of the hand */
  return <div className={classList} />;
};
