import { Character } from './character.api-model';
import { mockCharacterCollection } from './character.mock-data';

/*export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.results.find((h) => h.id === Number(id));
};*/

export const saveCharacter = async (character: Character): Promise<boolean> => {
      character = {... character, bestSentences:[ ...character?.bestSentences || [],character.lastSentence]}
      const url = (character.id) ? `http://localhost:3000/character/${character.id}` : 'http://localhost:3000/character' ;
      const method = (character.id) ? 'PUT' : 'POST';
      fetch(url, {
      method: method,
      body: JSON.stringify(character),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      return true;
}      

export const getCharacter = async(id: string): Promise<Character> => fetch(`http://localhost:3000/character/${id}`)
  .then((response) => response.json());
 
