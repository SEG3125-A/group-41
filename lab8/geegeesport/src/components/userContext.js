"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log("Storing user data")
    console.log(userData);
    setUser(userData.email);
    Cookies.set('user', userData.email);
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('user');
  };

  const isLogged = () => {
    console.log("Checking if user is logged in")
    console.log(Cookies.get('user'))
    setUser(Cookies.get('user'));
    console.log(user)
    if (Cookies.get('user')) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {console.log(user,"user value")}, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout, isLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
