import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, DialogContentText, Link, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onDetails: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete , onDetails } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <>
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.species}</Avatar>}
        title={character.name}
        subheader={character.location}
      />
      <CardContent>
        <div className={classes.content}>
        <div className={classes.buttonDialog}>
          <Link color="primary" onClick={handleClickOpen}>
           Best sentences
          </Link>
        </div>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => onDetails(character.id)}>
          <VisibilityIcon />
        </IconButton>
       
      </CardActions>
    </Card>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Best Sentences"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {!character.bestSentences || character.bestSentences.length === 0 
              ? (<h4>Be the first to add the best sentence</h4>)
              : (
                <ol>
                  {character.bestSentences && character.bestSentences?.length> 0  && character.bestSentences.map((item,index)=>{
                    return(<li key={index}> {item} </li>)} 
                  )}  
                </ol>
              )
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
     </> 
  );
};
