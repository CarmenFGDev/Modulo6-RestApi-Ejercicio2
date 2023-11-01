import { Character } from './character.api-model';
import { mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.results.find((h) => h.id === Number(id));
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
