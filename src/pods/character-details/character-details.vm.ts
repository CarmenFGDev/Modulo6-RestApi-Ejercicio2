export interface CharacterDetails {
  id: number;
  image: string;
  name: string;
  species: string;
  location: string;
  episode: string[];
}

export const createEmptyCharacter = (): CharacterDetails => ({
  id: null,
  image: '',
  name: '',
  species:'',
  location: '',
  episode: []
});
