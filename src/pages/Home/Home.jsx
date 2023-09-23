import About from '../../components/About/About';
import Login from '../../components/Login/Login';
import Homepage from '../../components/Homepage/Homepage';

import { useContext } from 'react';

export default function Home({ AuthContext }) {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      {loggedIn ?
        <>
          <Homepage AuthContext={ AuthContext }/>
        </>
        :
        <>
          <About />
          <Login />
        </>
      }
    </>
  )}