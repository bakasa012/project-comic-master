import React from 'react';
import { AuthContext } from './Auth.context';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<string | null>(sessionStorage.getItem('auth_'));

  const signin = (username: string, callback: VoidFunction) => {
    sessionStorage.setItem('auth_', username);
    setUser(username);
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
