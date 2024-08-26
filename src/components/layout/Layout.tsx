import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <nav>Select your favorite house</nav>
      <section>{children}</section>
    </main>
  );
}
