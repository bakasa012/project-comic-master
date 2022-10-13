import React from 'react';
import { AuthContext } from './Auth.context';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<string | null>(null);

  const signin = (username: string, callback: VoidFunction) => {
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
