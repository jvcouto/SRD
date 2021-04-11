import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import LogoPng from '../../assets/user.svg';
import { useAuth } from '../../services/authContext';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    border: '2px solid blue',
    marginTop: 100,
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
  textfield: {
    margin: theme.spacing(2),
    width: 350,
  },
  span: {
    color: 'red',
    margin: theme.spacing(2),
  },
  img: {
    width: 250,
    height: 'auto',
    marginLeft: 60,
  },
}));

export default function ValidationTextFields() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const classes = useStyles();
  const { setIsLogged } = useAuth();

  const handleClick = () => {
    if (username === '12345') {
      if (password === 'testeteste') {
        setIsLogged(true);
      } else {
        setPassword('');
        setUsername('');
        setError(true);
      }
    } else {
      setUsername('');
      setPassword('');
      setError(true);
    }
  };

  const handleUsernameChange = (event) => setUsername(event.target.value);

  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <form className={classes.form} autoComplete="off">
      <div className={classes.div}>
        <img className={classes.img} src={LogoPng} alt="Imagem Login" />
        <TextField
          className={classes.textfield}
          required
          type="text"
          value={username}
          id="login"
          label="Usuário"
          onChange={handleUsernameChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.textfield}
          onChange={handlePasswordChange}
          value={password}
          required
          id="password"
          label="Password"
          type="password"
        />
        {error && <span className={classes.span}>Usuário ou senha incorreto!</span>}
        <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
          Entrar
        </Button>
      </div>
    </form>
  );
}
