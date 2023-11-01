import { CharacterCollectionEntityApi, CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

//let characterCollection: CharacterCollectionEntityApi = mockCharacterCollection;

//export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => characterCollection.results;
/*export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection.results = characterCollection.results.filter((h) => h.id !== id);
  return true;
};*/
export const getCharacterCollection =(): Promise<CharacterEntityApi[]> => fetch('http://localhost:3000/character').then(response => response.json());

export const deleteCharacter = async (id: number): Promise<boolean> => {
 fetch(`http://localhost:3000/character/${id}`, {
  method: 'DELETE',
});
  return true;
}

