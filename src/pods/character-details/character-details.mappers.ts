import * as apiModel from './api/character-details.api-model';
import * as viewModel from './character-details.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterDetails
): viewModel.CharacterDetails => ({
  ...character,
  location: character.location?.name
});

