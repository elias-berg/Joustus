import { ImgHTMLAttributes } from "react";
import styles from "./Card.module.css";
import { CardName } from "../types";

const ASSET_ROOT = "assets";

interface CardProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: CardName;
}

export const Card = ({ name, ...rest }: CardProps) => {
  return (
    <img src={`${ASSET_ROOT}/${name}`} className={styles.card} {...rest} />
  );
};
