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

export default function TecnicoList(props) {
  const { tecnicos, setTecnicos } = props;
  const classes = useStyles();
  console.log(props);
  console.log('tecnicos', tecnicos);
  const handleDeleteButton = (selectedTecnico) => {
    console.log('Selected Tecnico: ', selectedTecnico);
    const newTecnicos = tecnicos;
    setTecnicos(newTecnicos.filter((tecnico) => tecnico.nome !== selectedTecnico.nome));
  };

  const resp = (
    <div className={classes.root}>
      {tecnicos.map((tecnico) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={tecnico}
          >
            <Typography className={classes.heading}>
              {`${tecnico.nome} ${tecnico.sobrenome}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Cargo: ${tecnico.cargo}`}
              <br />
              {`Curso: ${tecnico.curso}`}
              <br />
              {`Cpf: ${tecnico.cpf}`}
              <br />
              {`Email: ${tecnico.email}`}
              <br />
              {`Data De Nascimento: ${tecnico.dataDeNascimento}`}
              <br />
              {`Ano admissao: ${tecnico.anoAdmissao}`}
            </Typography>
          </AccordionDetails>

          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => {
                alert('asijasj');
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                handleDeleteButton(tecnico);
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
