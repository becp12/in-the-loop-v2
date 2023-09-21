import Dashboard from '../../components/Dashboard/Dashboard';
import Login from '../../components/Login/Login';

import { useContext } from 'react';

export default function Home({ AuthContext }) {
    const { loggedIn } = useContext(AuthContext);
    if (loggedIn === true) return <Dashboard AuthContext={AuthContext}/>;
    if (loggedIn === false) return <Login />
    return <></>;
  }