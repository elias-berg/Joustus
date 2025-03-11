import { useState } from "react";
import { Player as PlayerModel } from "../../model/Player";
import styles from "./Player.module.css";
import { Card } from "../Card";
import { PlayerNumber } from "../types";
import { Deck } from "../Deck";

interface PlayerProps {
  which: PlayerNumber;
}

export const Player = ({ which }: PlayerProps) => {
  const [player, setPlayer] = useState(new PlayerModel());

  return (
    <>
      <div className={styles.container}>
        {/* The Deck */}
        <Deck which={which} />

        {/* The Hand */}
        {player.hand().map((c, i) => (
          <Card
            key={i}
            name={c}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        ))}
      </div>
    </>
  );
};
