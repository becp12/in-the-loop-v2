import axios from 'axios';
import { useContext } from 'react';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Homepage({ AuthContext }) {
  const { user, loggedIn, checkLoginState } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.post(`${serverUrl}/auth/logout`);
      // Check login state again
      checkLoginState();
    } catch (err) {
      console.error(err);
    }
  }

    return (
      <main className="App">
        <h1> Hello to Homepage </h1>
        <button className="btn" onClick={handleLogout} >Logout</button>
        <h4>{user?.firstName}</h4>
        <br />
        <p>{user?.email}</p>
        <br />
        <img src={user?.avatar} alt={user?.name} />
        <br />
      </main>
    );
  }