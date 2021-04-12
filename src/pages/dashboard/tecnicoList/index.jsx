import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  Input: {
    margin: theme.spacing(1),
  },
  Button: {
    margin: theme.spacing(1),
  },
  Summary: {
    borderBottom: '1px solid blue',
    borderRadius: '10px',
  },
}));

export default function TecnicoList(props) {
  const { tecnicos, setTecnicos } = props;
  const classes = useStyles();

  const handleDeleteButton = (selectedTecnico) => {
    const newTecnicos = tecnicos;
    setTecnicos(newTecnicos.filter((tecnico) => tecnico.nome !== selectedTecnico.nome));
  };

  const [isEditing, setIsEditing] = useState(false);
  const [selectedEditTecnico, setSelectedEditTecnico] = useState(false);

  const [newName, setNewName] = useState('');
  const [newSobrenome, setNewSobrenome] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleEditButton = (tecnico) => {
    setIsEditing(true);
    setSelectedEditTecnico(tecnico);
    setNewName(tecnico.nome);
    setNewSobrenome(tecnico.sobrenome);
    setNewEmail(tecnico.email);
  };

  const handleEditConfim = () => {
    const newTecnicos = tecnicos;
    // eslint-disable-next-line max-len
    const index = newTecnicos.findIndex((professor) => professor.cpf === selectedEditTecnico.cpf);
    newTecnicos.splice(index, 1, {
      nome: newName,
      sobrenome: newSobrenome,
      email: newEmail,
      cargo: selectedEditTecnico.cargo,
      curso: selectedEditTecnico.curso,
      cpf: selectedEditTecnico.cpf,
      dataDeNascimento: selectedEditTecnico.dataDeNascimento,
      anoAdmissao: selectedEditTecnico.anoAdmissao,
    });
    setTecnicos(newTecnicos);
    setIsEditing(false);
    setSelectedEditTecnico(null);
    setNewName('');
    setNewSobrenome('');
    setNewEmail('');
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleSobreNomeChange = (event) => setNewSobrenome(event.target.value);
  const handleEmailChange = (event) => setNewEmail(event.target.value);

  const handleEditCancel = () => {
    setIsEditing(false);
    setSelectedEditTecnico(null);
  };

  const resp = (
    <div className={classes.root}>
      {tecnicos.map((tecnico) => (
        <Accordion>
          <AccordionSummary
            className={classes.Summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={tecnico}
          >
            <Typography className={classes.heading}>
              {`${tecnico.nome} ${tecnico.sobrenome}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {isEditing && tecnico === selectedEditTecnico
              ? (
                <form>
                  <TextField
                    className={classes.Input}
                    required
                    id="name"
                    label="Nome"
                    defaultValue={selectedEditTecnico.nome}
                    type="text"
                    fullWidth
                    onChange={handleNameChange}
                  />
                  <TextField
                    className={classes.Input}
                    id="Sobrenome"
                    required
                    onChange={handleSobreNomeChange}
                    label="Sobrenome"
                    defaultValue={selectedEditTecnico.sobrenome}
                    type="text"
                    fullWidth
                  />
                  <TextField
                    className={classes.Input}
                    id="Email"
                    required
                    onChange={handleEmailChange}
                    label="Sobrenome"
                    defaultValue={selectedEditTecnico.email}
                    type="text"
                    fullWidth
                  />
                  <Button variant="contained" color="inherit" className={classes.Button} onClick={handleEditCancel}>
                    Cancelar
                  </Button>
                  <Button variant="contained" color="primary" className={classes.Button} onClick={handleEditConfim}>
                    Confirmar
                  </Button>
                </form>
              )
              : (
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
              )}
          </AccordionDetails>

          {!isEditing && (
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => {
                handleEditButton(tecnico);
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
          )}
        </Accordion>
      ))}

    </div>
  );
  return resp;
}
