import { Link } from "react-router-dom";

import { ICharacter } from "../../models/character";
import classes from "./Card.module.scss";
import { useState } from "react";

export default function Card({ character }: { character: ICharacter }) {
  const [failedToLoadImage, setFailedToLoadImage] = useState(false);

  const { id, image, name } = character;

  return (
    <Link to={`/character/${id}`} className={classes.card}>
      <img
        src={failedToLoadImage ? "/assets/imgs/placeholder.jpg" : image}
        alt={name}
        className={classes.image}
        onError={() => {
          setFailedToLoadImage(true);
        }}
      />
      <strong className={classes.name}>{name}</strong>
    </Link>
  );
}
