import { ReactNode, useState } from "react";

import { useSyncState } from "../../hooks";
import { IHouse } from "../../models/character";
import classes from "./Layout.module.scss";

const houses: Array<IHouse> = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
];

export default function Layout({ children }: { children: ReactNode }) {
  const [favoriteHouse, setFavoriteHouse] =
    useSyncState<IHouse>("favorite-house");
  const [favoriteHousePopupOpen, setFavoriteHousePopupOpen] = useState(false);

  const handleToggleFavoriteHousePopup = () => {
    setFavoriteHousePopupOpen((prev) => !prev);
  };

  const handleSetHouseAsFavorite = (house: IHouse) => {
    setFavoriteHousePopupOpen(false);
    setFavoriteHouse(house);
  };

  return (
    <main className={classes.main}>
      <nav className={classes.nav}>
        <div className={classes.info}>
          <img src="/assets/imgs/harry-potter.svg" className={classes.logo} />
          <strong className={classes.title}>Wizard World</strong>
        </div>
        <div className={classes.favoriteHouse}>
          <div>
            <button onClick={handleToggleFavoriteHousePopup}>
              {favoriteHouse ? (
                <strong>{favoriteHouse}</strong>
              ) : (
                "Select your favorite house"
              )}
            </button>
          </div>
          {favoriteHousePopupOpen && (
            <ul className={classes.popup}>
              {houses.map((house) => (
                <li key={house}>
                  <button
                    onClick={() => {
                      handleSetHouseAsFavorite(house);
                    }}
                    style={{
                      fontWeight: favoriteHouse === house ? "bold" : "normal",
                    }}
                  >
                    {/* TODO: add house crest */}
                    {house}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
      <section className={classes.content}>{children}</section>
    </main>
  );
}
