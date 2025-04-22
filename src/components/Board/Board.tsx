import { Board as BoardModel } from "../../model/Board";
import { SpaceType } from "../../types";
import styles from "./Board.module.css";

interface BoardProps {
  readonly board: BoardModel;
}

export const Board = ({ board }: BoardProps) => {
  return (
    <table className={`${styles.grid}`}>
      <tbody>
        {board.spaces.map((row) => {
          return (
            <tr>
              {row.map((space) => {
                let spaceClass = "";
                if (space.type === SpaceType.OPEN) {
                  spaceClass = styles["in-bounds"];
                } else if (space.type === SpaceType.OUT_OF_BOUNDS) {
                  spaceClass = styles["out-of-bounds"];
                }
                return (
                  <td className={`${spaceClass}`}>
                    <div className={`${styles.space}`} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
