import { useState } from "react";
import { Link } from "react-router-dom";

import { HeartIcon } from "../Heart";
import { ICharacter } from "../../models/character";
import { useFavorite } from "../../hooks";
import classes from "./Card.module.scss";

export default function Card({ character }: { character: ICharacter }) {
  const { id, image, name } = character;

  const [failedToLoadImage, setFailedToLoadImage] = useState(false);
  const [isFavorite, toggleFavorite] = useFavorite(id);

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
      <button
        className={classes.favorite}
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(character.id);
        }}
      >
        <HeartIcon isFilled={isFavorite} width={20} height={20} />
      </button>
    </Link>
  );
}
