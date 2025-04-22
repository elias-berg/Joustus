import { Board } from "./components/Board";
import { Player } from "./components/Player";
import styles from "./App.module.css";
import { PlayerNumber } from "./types";
import { BasicBoard2x2, BasicBoard3x3 } from "./static/Boards";

function App() {
  const board = BasicBoard2x2();

  return (
    <>
      <div className={styles.container}>
        <Player which={PlayerNumber.ONE} />
        <Board board={board} />
        <Player which={PlayerNumber.TWO} />
      </div>
    </>
  );
}

export default App;
