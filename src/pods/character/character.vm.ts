export interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  lastSentence?: string;
  bestSentences?: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: null,
  image: '',
  name: '',
  species:'',
  status: '',
  lastSentence:'',
  bestSentences:[]
});
