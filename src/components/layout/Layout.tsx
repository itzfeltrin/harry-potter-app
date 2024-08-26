import { ReactNode } from "react";

import classes from "./Layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={classes.main}>
      <nav className={classes.nav}>
        <img src="/assets/imgs/harry-potter.svg" className={classes.logo} />
        <strong className={classes.title}>Wizard World</strong>
      </nav>
      <section className={classes.content}>{children}</section>
    </main>
  );
}
