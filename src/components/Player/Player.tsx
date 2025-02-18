import { useState } from "react";
import { Player as PlayerModel } from "../../model/Player";
import styles from "./Player.module.css";

export const Player = () => {
  const [player, setPlayer] = useState(new PlayerModel());

  return (
    <div className={styles.container}>
      {player.hand.map((c, i) => (
        <img src={c.asset ?? ""} key={i} className={styles.card} />
      ))}
    </div>
  );
};
