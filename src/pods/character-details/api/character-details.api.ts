import { CharacterDetails } from './character-details.api-model';
import { mockCharacterCollection } from './character-details.mock-data';

export const getCharacter = async (id: string): Promise<CharacterDetails> => {
  return mockCharacterCollection;
};

