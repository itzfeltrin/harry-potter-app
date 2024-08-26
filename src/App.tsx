import { useEffect, useState } from "react";
import "./App.css";
import { makeGetRequest } from "./utils/api";
import { ICharacter } from "./models/character";
import Layout from "./components/layout/Layout";

function App() {
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
    <Layout>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <strong>{character.name}</strong>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

// TODO: Make this file the router....

export default App;
