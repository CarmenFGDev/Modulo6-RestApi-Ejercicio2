import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDetails, createEmptyCharacter } from 'pods/character-details/character-details.vm';
import { mapCharacterFromApiToVm } from 'pods/character-details/character-details.mappers';
import { CharacterDetailsComponent } from './character-details.component';
import * as api from './api';



export const CharacterDetailsContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterDetails>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);
 return <CharacterDetailsComponent character={character}/>

};
