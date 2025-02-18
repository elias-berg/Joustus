import { Board } from "./components/Board";
import { Player } from "./components/Player";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Player />
        <Board />
        <Player />
      </div>
    </>
  );
}

export default App;
