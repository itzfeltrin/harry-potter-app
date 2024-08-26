import { useState } from "react";
import cn from "classnames";

import { IHouse } from "../../models/character";
import { houses } from "../../constants";
import classes from "./HouseSelect.module.scss";

interface Props {
  value?: IHouse;
  placeholder: string;
  onChange(newValue: IHouse): void;
}

export default function HouseSelect({ value, placeholder, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (house: IHouse) => {
    setIsOpen(false);
    onChange(house);
  };

  return (
    <div className={classes.favoriteHouse}>
      <div>
        <button
          onClick={handleTogglePopup}
          className={cn(classes.trigger, { [classes.active]: value })}
        >
          {value ? <p>{value}</p> : placeholder}
        </button>
      </div>
      {isOpen && (
        <ul className={classes.popup}>
          {houses.map((house) => (
            <li key={house}>
              <button
                onClick={() => {
                  handleSelect(house);
                }}
                style={{
                  fontWeight: value === house ? "bold" : "normal",
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
  );
}
