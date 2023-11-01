import React from 'react';
import { CharacterDetails } from './character-details.vm';
import * as classes from './character-details.styles';
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material';
import { Episode } from './components/episode.comnponent';

interface Props {
  character: CharacterDetails;
}

export const CharacterDetailsComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
      <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.species}</Avatar>}
        title={character.name}
        subheader={character.location}
      />
      <CardContent>
        <div className={classes.root}>
          <div className={classes.img}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
        </div>
        <div className={classes.episode}>
          <Episode episodeList={character.episode} />
        </div>

        </div>
       
      </CardContent>
    </Card>
  );
};
