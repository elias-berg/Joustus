import { act, useState } from "react";
import { Card as CardModel } from "../../model/Card";
import { Player as PlayerModel } from "../../model/Player";
import styles from "./Player.module.css";
import { Card } from "../Card";
import { PlayerNumber } from "../../types";
import { Deck } from "../Deck";

interface PlayerProps {
  which: PlayerNumber;
}

export const Player = ({ which }: PlayerProps) => {
  const [player, setPlayer] = useState(new PlayerModel());
  const [activeCard, setActiveCard] = useState<CardModel | undefined>(
    undefined
  );

  return (
    <>
      <div className={styles.container}>
        {/* The Deck */}
        <Deck which={which} />

        {/* The Hand */}
        {player.hand().map((c, i) => (
          <Card
            key={i}
            name={c.name}
            which={which}
            isActive={c === activeCard}
            onClick={(e) => {
              e.preventDefault();
              if (which === PlayerNumber.ONE) {
                setActiveCard(c);
              }
            }}
          />
        ))}
      </div>
    </>
  );
};
