import { useEffect, useState } from "react";
import cn from "classnames";

import { ICharacter, IHouse } from "../../../models/character";
import { makeGetRequest } from "../../../utils/api";
import { Card } from "../../../components/Card";
import classes from "./List.module.scss";
import { HouseSelect } from "../../../components/HouseSelect";
import { houses } from "../../../constants";

function isHouseFilter(value: string) {
  return (houses as string[]).includes(value);
}

export default function CharacterList() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [filter, setFilter] = useState<"all" | "staff" | "students" | IHouse>(
    "all"
  );

  const fetchCharacters = async (filterBy: typeof filter = "all") => {
    let data = [];
    try {
      let endpoint = "characters";
      if (filterBy !== "all") {
        if (isHouseFilter(filterBy)) {
          endpoint += `/house/${filterBy.toLowerCase()}`;
        } else {
          endpoint += `/${filterBy}`;
        }
      }
      data = await makeGetRequest(endpoint);
    } catch (ex) {
      // TODO: do something with the exception
      console.error(ex);
    }
    setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleChangeFilter = (newFilter: typeof filter) => {
    setFilter(newFilter);
    fetchCharacters(newFilter);
  };

  return (
    <div>
      <h1>Characters</h1>
      <div className={classes.filters}>
        <span>Filter: </span>
        <button
          className={cn(classes.button, { [classes.active]: filter === "all" })}
          onClick={() => {
            handleChangeFilter("all");
          }}
        >
          All
        </button>
        <button
          className={cn(classes.button, {
            [classes.active]: filter === "staff",
          })}
          onClick={() => {
            handleChangeFilter("staff");
          }}
        >
          Staff
        </button>
        <button
          className={cn(classes.button, {
            [classes.active]: filter === "students",
          })}
          onClick={() => {
            handleChangeFilter("students");
          }}
        >
          Students
        </button>
        <HouseSelect
          value={isHouseFilter(filter) ? (filter as IHouse) : undefined}
          placeholder="By house"
          onChange={handleChangeFilter}
        />
      </div>
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
