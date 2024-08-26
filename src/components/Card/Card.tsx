import { ICharacter } from "../../models/character";
import classes from "./Card.module.scss";

export default function Card({ character }: { character: ICharacter }) {
  const { image, name } = character;

  return (
    <div className={classes.card}>
      <img src={image} alt={name} className={classes.image} />
      <strong className={classes.name}>{name}</strong>
    </div>
  );
}
