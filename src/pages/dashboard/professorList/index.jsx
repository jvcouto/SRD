/* eslint-disable react/prop-types */
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

export default function ProfessorList(props) {
  const { professors, setProfessors } = props;
  const classes = useStyles();

  const [isEditing, setIsEditing] = useState(false);
  const [selectedEditProfessor, setSeletedEditProfessor] = useState(false);

  const [newName, setNewName] = useState('');
  const [newSobrenome, setNewSobrenome] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleEditButton = (professor) => {
    setIsEditing(true);
    setSeletedEditProfessor(professor);
    setNewName(professor.nome);
    setNewSobrenome(professor.sobrenome);
    setNewEmail(professor.email);
  };

  const handleEditConfim = () => {
    const newProfessors = professors;
    // eslint-disable-next-line max-len
    const index = newProfessors.findIndex((professor) => professor.cpf === selectedEditProfessor.cpf);
    newProfessors.splice(index, 1, {
      nome: newName,
      sobrenome: newSobrenome,
      email: newEmail,
      titulacao: selectedEditProfessor.titulacao,
      cpf: selectedEditProfessor.cpf,
      dataDeNascimento: selectedEditProfessor.dataDeNascimento,
      anoAdmissao: selectedEditProfessor.anoAdmissao,
    });
    setProfessors(newProfessors);
    setIsEditing(false);
    setSeletedEditProfessor(null);
    setNewName('');
    setNewSobrenome('');
    setNewEmail('');
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleSobreNomeChange = (event) => setNewSobrenome(event.target.value);
  const handleEmailChange = (event) => setNewEmail(event.target.value);

  const handleEditCancel = () => {
    setIsEditing(false);
    setSeletedEditProfessor(null);
  };

  const handleDeleteButton = (selectedProfessor) => {
    const newProfessors = professors;
    setProfessors(newProfessors.filter((professor) => professor.nome !== selectedProfessor.nome));
  };

  return (
    <div className={classes.root}>
      {professors.map((professor) => (
        <Accordion>
          <AccordionSummary
            className={classes.Summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={professor}
          >
            <Typography className={classes.heading}>
              {isEditing && professor === selectedEditProfessor ? <typography variant="h4">Editando</typography> : `${professor.nome} ${professor.sobrenome}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {isEditing && professor === selectedEditProfessor
              ? (
                <form>
                  <TextField
                    className={classes.Input}
                    required
                    id="name"
                    label="Nome"
                    defaultValue={selectedEditProfessor.nome}
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
                    defaultValue={selectedEditProfessor.sobrenome}
                    type="text"
                    fullWidth
                  />
                  <TextField
                    className={classes.Input}
                    id="Email"
                    required
                    onChange={handleEmailChange}
                    label="Sobrenome"
                    defaultValue={selectedEditProfessor.email}
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
              )}
          </AccordionDetails>

          {!isEditing && (
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => {
                  handleEditButton(professor);
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
          )}
        </Accordion>
      ))}
    </div>
  );
}
