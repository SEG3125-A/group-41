"use client"
import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log("Storing user data")
    console.log(userData);
    setUser(userData);
    Cookies.set('user', userData);
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('user');
  };

  const isLogged = () => {
    if (Cookies.get('user')) {
      return user;
    } else {
      return null;
    }
  }

  return (
    <UserContext.Provider value={{ user, login, logout, isLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
