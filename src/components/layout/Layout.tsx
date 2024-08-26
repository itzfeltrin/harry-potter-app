import { ReactNode } from "react";

import { HouseSelect } from "../HouseSelect";
import { useSyncState } from "../../hooks";
import { IHouse } from "../../models/character";
import classes from "./Layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  const [favoriteHouse, setFavoriteHouse] =
    useSyncState<IHouse>("favorite-house");

  return (
    <main className={classes.main}>
      <nav className={classes.nav}>
        <div className={classes.info}>
          <img src="/assets/imgs/harry-potter.svg" className={classes.logo} />
          <strong className={classes.title}>Wizard World</strong>
        </div>
        <HouseSelect
          value={favoriteHouse}
          placeholder="Select your favorite house"
          onChange={setFavoriteHouse}
        />
      </nav>
      <section className={classes.content}>{children}</section>
    </main>
  );
}
