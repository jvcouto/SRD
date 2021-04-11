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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const { professors, setProfessors } = props;
  const classes = useStyles();

  const handleDeleteButton = (selectedProfessor) => {
    const newProfessors = professors;
    setProfessors(newProfessors.filter((professor) => professor.nome !== selectedProfessor.nome));
  };

  const resp = (
    <div className={classes.root}>
      {professors.map((professor) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={professor}
          >
            <Typography className={classes.heading}>
              {`${professor.nome} ${professor.sobrenome}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Titualção: ${professor.titulacao}`}
              <br />
              {`Cpf: ${professor.cpf}`}
              <br />
              {`Email: ${professor.email}`}
              <br />
              {`Data De Nascimento: ${professor.dataDeNascimento}`}
              <br />
              {`Ano admissao: ${professor.anoAdmissao}`}
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
                handleDeleteButton(professor);
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
