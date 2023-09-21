import logo from '../../logo.svg'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, createContext, useCallback } from 'react';

import Callback from '../../components/Callback/Callback';
import Home from '../../components/Home/Home';

// Ensures cookie is sent
axios.defaults.withCredentials = true;

const serverUrl = process.env.REACT_APP_SERVER_URL;
const AuthContext = createContext();

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home AuthContext={AuthContext}/>,
  },
  {
    path: '/auth/callback', // google will redirect here
    element: <Callback AuthContext={AuthContext}/>,
  }
]);

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </header>
    </div>
  );
}

// export default App;