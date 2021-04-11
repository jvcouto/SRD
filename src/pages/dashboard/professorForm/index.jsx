import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfield: {
    margin: theme.spacing(2),
    width: 350,
  },
  div: {
    border: '2px solid blue',
    marginTop: 10,
    padding: theme.spacing(5),
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '25px',
  },
  button: {
    width: 350,
    height: 50,
    margin: theme.spacing(2),
  },
}));

export default function ProfessorForm(props) {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { professors, setProfessors } = props;
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [titulacao, setTitulacao] = useState('');
  const [dataDeNascimento, setDataDeNascimento] = useState('');
  const [anoAdmissao, setAnoDeAdmissao] = useState('');

  const handleCpfChange = (event) => setCpf(event.target.value);
  const handleNomeChange = (event) => setNome(event.target.value);
  const handleSobrenomeChange = (event) => setSobrenome(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleTitulaçãoChange = (event) => setTitulacao(event.target.value);
  const handleDataDeNascimentoChange = (event) => setDataDeNascimento(event.target.value);
  const handleAnoAdmissaoChange = (event) => setAnoDeAdmissao(event.target.value);

  const handleClick = () => {
    const newProfessors = professors;
    // eslint-disable-next-line react/prop-types
    newProfessors.push({
      cpf, nome, sobrenome, email, titulacao, dataDeNascimento, anoAdmissao,
    });
    setProfessors(newProfessors);
    setCpf('');
    setNome('');
    setEmail('');
    setTitulacao('');
    setDataDeNascimento('');
    setSobrenome('');
    setAnoDeAdmissao('');
  };

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <div className={classes.div}>
        <Typography variant="h4">Formulario</Typography>
        <TextField id="Cpf" required label="Cpf" onChange={handleCpfChange} className={classes.textfield} />
        <TextField id="Nome" required label="Nome" onChange={handleNomeChange} className={classes.textfield} />
        <TextField id="Sobrenome" value={sobrenome} required label="Sobrenome" onChange={handleSobrenomeChange} className={classes.textfield} />
        <TextField id="Email" required label="Email" onChange={handleEmailChange} className={classes.textfield} />
        <TextField id="Titulacao" required label="Titulação" onChange={handleTitulaçãoChange} className={classes.textfield} />
        <TextField id="Data de nascimento" required label="Data de nascimento" onChange={handleDataDeNascimentoChange} className={classes.textfield} />
        <TextField id="Ano admissao" required label="Ano admissão" onChange={handleAnoAdmissaoChange} className={classes.textfield} />
        <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
          Confirmar
        </Button>
      </div>
    </form>
  );
}
