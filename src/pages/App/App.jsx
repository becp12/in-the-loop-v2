import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, createContext, useCallback } from 'react';

import Callback from '../../components/Callback/Callback';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Projects from '../Projects/Projects';

// Ensures cookie is sent
axios.defaults.withCredentials = true;

const serverUrl = process.env.REACT_APP_SERVER_URL;
const AuthContext = createContext();


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home AuthContext={AuthContext}/>,
  },
  {
    path: '/auth/callback', // google will redirect here
    element: <Callback AuthContext={AuthContext}/>,
  },
  {
    path: "/projects/*",
    children: [
      { index: true, element: <Projects /> }, 
    ],
  }
]);

const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(null);
    const [user, setUser] = useState(null);
  
    const checkLoginState = useCallback(async () => {
      try {
        const { data: { loggedIn: logged_in, user }} = await axios.get(`${serverUrl}/auth/logged_in`);
        setLoggedIn(logged_in);
        user && setUser(user);
      } catch (err) {
        console.error(err);
      }
    }, []);
  
    useEffect(() => {
      checkLoginState();
    }, [checkLoginState]);
  
    return (
      <AuthContext.Provider value={{ loggedIn, checkLoginState, user }}>
        {children}
      </AuthContext.Provider>
    );
  }

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </main>
  );
}

