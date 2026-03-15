import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: any;
  signIn: (email: string, pass: string) => Promise<void>;
  signUp: (email: string, pass: string, data: any) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const signIn = async (email: string, pass: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'demo@tresbontech.com' && pass === 'demo123') {
          setUser({ email, name: 'Demo User' });
          resolve();
        } else if (email && pass) {
          setUser({ email, name: 'Test User' });
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signUp = async (email: string, pass: string, data: any) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser({ email, ...data });
        resolve();
      }, 1000);
    });
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
