import * as apiModel from './api/character-details.api-model';
import * as viewModel from './character-details.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterDetails
): viewModel.CharacterDetails => ({
  id: character.id,
  image: character.image,
  name: character.name,
  species: character.species,
  location: character.location.name,
  episode: character.episode 
});

