import { useEffect, useState } from "react";

import { ICharacter } from "../../../models/character";
import { makeGetRequest } from "../../../utils/api";
import { Card } from "../../../components/Card";

export default function CharacterList() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      let data = [];
      try {
        data = await makeGetRequest("characters");
      } catch (ex) {
        // TODO: do something with the exception
        console.error(ex);
      }
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>All Characters</h1>
      <ul
        // TODO: Remove style below
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px,  1fr))",
          gap: "1rem",
        }}
      >
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <Card character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
