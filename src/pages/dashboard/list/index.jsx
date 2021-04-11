import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import dbManager from '../../../utils/dbManager';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList() {
  const classes = useStyles();
  const data = dbManager.getTeacherList(0);

  const response = (
    <List className={classes.root}>
      {data.map((c) => (
        <ListItem>
          <ListItemText primary={c.name} secondary={c.titration} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="expand">
              <ExpandMoreIcon />
            </IconButton>
            <IconButton edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}

    </List>
  );
  return response;
}
