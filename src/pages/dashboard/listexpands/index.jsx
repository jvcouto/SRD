import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import dbManager from '../../../utils/dbManager';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const data = dbManager.getTeacherList(0);
  const resp = (
    <div className={classes.root}>
      {data.map((c) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {' '}
              {c.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Titualção: ${c.titration}`}
              <br />
              {`Cpf: ${c.cpf}`}
            </Typography>
          </AccordionDetails>

          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => {
                alert('✔️ Editar!');
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                alert('✔️ Deletar!');
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Accordion>
      ))}

    </div>
  );
  return resp;
}
