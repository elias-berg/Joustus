import { ImgHTMLAttributes } from "react";
import styles from "./Card.module.css";
import { CardName, PlayerNumber } from "../../types";

const ASSET_ROOT = "assets";

interface CardProps extends ImgHTMLAttributes<HTMLImageElement> {
  readonly name: CardName;
  readonly which: PlayerNumber;
  readonly isActive: boolean;
}

export const Card = ({ name, isActive, ...rest }: CardProps) => {
  return (
    <img
      src={`${ASSET_ROOT}/${name}`}
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      {...rest}
    />
  );
};
