import { useContext } from 'react';
import AuthContext from './authContext';

const Login = (user, password) => {
  const { setIsLogged } = useContext(AuthContext);
  if (user === '12345678') {
    if (password === 'testeste') {
      setIsLogged(true);
    }
  }
};

export default Login;
