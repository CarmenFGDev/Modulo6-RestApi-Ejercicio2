export interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
}

export const createEmptyCharacter = (): Character => ({
  id: null,
  image: '',
  name: '',
  species:'',
  status: '',
});
