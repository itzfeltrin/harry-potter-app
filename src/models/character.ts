type Species = "human";

type House = "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw";

export interface ICharacter {
  id: string;
  name: string;
  alternate_names: string[];
  species: Species;
  gender: string; // TODO: check possible values
  house: House;
  dateOfBirth: Date;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string; // TODO: check possible values
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[]; // TODO: check possible values
  alive: boolean;
  image: string;
}
