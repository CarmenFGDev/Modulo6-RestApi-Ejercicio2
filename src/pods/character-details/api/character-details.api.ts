import { CharacterDetails } from './character-details.api-model';
import { mockCharacterCollection } from './character-details.mock-data';

/*export const getCharacter = async (id: string): Promise<CharacterDetails> => {
  return mockCharacterCollection;
};*/
export const getCharacter = async(id: string): Promise<CharacterDetails> => fetch(`http://localhost:3000/character/${id}`)
  .then((response) => response.json());

