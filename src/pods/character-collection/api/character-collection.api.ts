import { CharacterCollectionEntityApi, CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection: CharacterCollectionEntityApi = mockCharacterCollection;

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => characterCollection.results;

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection.results = characterCollection.results.filter((h) => h.id !== id);
  return true;
};
