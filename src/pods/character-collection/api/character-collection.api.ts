import {CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection =(): Promise<CharacterEntityApi[]> => fetch('http://localhost:3000/character').then(response => response.json());

export const deleteCharacter = async (id: number): Promise<boolean> => {
 fetch(`http://localhost:3000/character/${id}`, {
  method: 'DELETE',
});
  return true;
}

