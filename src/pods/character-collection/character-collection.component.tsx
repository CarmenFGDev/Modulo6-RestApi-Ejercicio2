import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onDetails: (id: number) => void;
}
  
export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete, onDetails } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button>

      <ul className={classes.list}>
        {characterCollection?.length>0 && characterCollection.map((character) =>{
          if (!character.lastSentence ) character.lastSentence=''; 
          return (
          <li key={character.id} > 
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} onDetails={ onDetails}/>
          </li>
        )})}
      </ul>
    </div>
  );
};
