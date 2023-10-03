import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, createContext, useCallback } from 'react';

import Callback from '../../components/Callback/Callback';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar'
import Projects from '../Projects/Projects';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import NewProjectForm from '../NewProject/newProjectForm'

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
      { index: true, element: <Projects AuthContext={AuthContext}/> }, 
      { path: ':projectId', element: <ProjectDetail />},
      { path: 'new', element: <NewProjectForm />}
    ],
  },
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



// make footer and include
// <a href="https://www.freepik.com/free-vector/knitted-woolen-clothes-set-illustrations-apparel-wool-balls-yarn-basket_20827796.htm#query=yarn%20ball%20clip%20art&position=14&from_view=search&track=ais">Image by pch.vector</a> on Freepik
// <a href="https://www.freepik.com/free-vector/yarn-wool-clew-illustration-knitting-textile-yellow-green-thread-weaving_2890877.htm#query=yarnball%20clipart&position=0&from_view=search&track=ais">Image by vectorpouch</a> on Freepik