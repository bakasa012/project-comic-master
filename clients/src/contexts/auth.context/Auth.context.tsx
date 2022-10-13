import React from 'react';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;
