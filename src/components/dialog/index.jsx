/* eslint-disable react/prop-types */
import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme) => ({
  Dialog: {
    display: 'flex',
    flexDirection: 'colunm',
    padding: theme.spacing(2),
  },
  Input: {
    margin: theme.spacing(1),
  },
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const {
    professor, open, onConfirm, onCancel,
  } = props;
  return (
    <div className={classes.Dialog}>
      <Dialog onClose={onCancel} open={open}>
        <DialogTitle id="form-dialog-title">Edição de Professor</DialogTitle>
        <DialogContent>
          <TextField
            className={classes.Input}
            id="name"
            label="Nome"
            defaultValue={professor.nome}
            type="text"
            fullWidth
          />
          <TextField
            className={classes.Input}
            id="Sobrenome"
            label="Sobrenome"
            defaultValue={professor.sobrenome}
            type="text"
            fullWidth
          />
          <TextField
            className={classes.Input}
            id="Email"
            label="Sobrenome"
            defaultValue={professor.email}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="inherit" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
