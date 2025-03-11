import { Board } from "./components/Board";
import { Player } from "./components/Player";
import styles from "./App.module.css";
import { PlayerNumber } from "./components/types";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Player which={PlayerNumber.ONE} />
        <Board />
        <Player which={PlayerNumber.TWO} />
      </div>
    </>
  );
}

export default App;
