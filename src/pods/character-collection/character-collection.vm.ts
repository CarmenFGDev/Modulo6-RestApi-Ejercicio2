export interface CharacterEntityVm {
  id: number;
  image: string;
  name: string;
  species: string;
  location: string;
  lastSentence?: string;
  bestSentences?: string[];
}
