import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ICharacter } from "../../../models/character";
import { makeGetRequest } from "../../../utils/api";
import { HeartIcon } from "../../../components/Heart";
import { useFavorite } from "../../../hooks";
import classes from "./Details.module.scss";

export default function Details() {
  const { id } = useParams<{ id: string }>();

  const [character, setCharacter] = useState<ICharacter>();
  const [isFavorite, toggleFavorite] = useFavorite(id as string);
  const [failedToLoadImage, setFailedToLoadImage] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      let data;
      try {
        data = await makeGetRequest(`character/${id}`);
      } catch (ex) {
        // TODO: Do something with ex
        console.log(ex);
      }
      setCharacter(data[0]);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <h1>Loading...</h1>;
  }

  const { name, image, alternate_names, house, patronus, dateOfBirth } =
    character;

  return (
    <section className={classes.info}>
      <p className={classes.link}>
        <Link to="/characters/list">Characters</Link>
        {" / "}
        {name}
      </p>
      <div className={classes.banner}>
        <div className={classes.box}>
          <strong className={classes.name}>{name}</strong>
          <em className={classes.alternateNames}>
            {alternate_names.join(", ")}
          </em>
          <p>House: {house}</p>
          <p>Patronus: {patronus}</p>
          <p>DOB: {dateOfBirth}</p>
        </div>
        <img
          src={failedToLoadImage ? "/assets/imgs/placeholder.jpg" : image}
          alt={name}
          className={classes.image}
          onError={() => {
            setFailedToLoadImage(true);
          }}
        />
        <button
          className={classes.favorite}
          onClick={() => {
            toggleFavorite(character.id);
          }}
        >
          <HeartIcon isFilled={isFavorite} width={20} height={20} />
        </button>
      </div>
    </section>
  );
}
