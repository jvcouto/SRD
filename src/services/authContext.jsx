import React, { createContext, useState } from 'react';

const AuthContext = createContext({ signed: true });

export const AuthProvider = (children) => {
  const [isLogged, setIsLogged] = useState();
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
