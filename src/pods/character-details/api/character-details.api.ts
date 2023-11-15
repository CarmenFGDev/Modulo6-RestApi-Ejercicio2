import { CharacterDetails } from './character-details.api-model';

export const getCharacter = async(id: string): Promise<CharacterDetails> => fetch(`http://localhost:3000/character/${id}`)
  .then((response) => response.json());

