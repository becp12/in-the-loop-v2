import axios from 'axios';
import { useContext } from 'react';
import "./Homepage.css"

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Homepage({ AuthContext }) {
  // loggedIn can be added to the const at a later date
  const { user, checkLoginState } = useContext(AuthContext);

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
    <main>
      <div id="welcome">
        <div id="welcome-words">
          <h3>Welcome, </h3>
          <h3>{user?.firstName}!</h3>
        </div>
        <img src={user?.avatar} alt={user?.name} id="user-img" />
        <button type="button" className="btn btn-info logging" onClick={handleLogout} >Logout</button>
      </div>



      <br /><br /><br /><br /><br /><br />
      <p>{user?.email}</p>

    </main>
  );
}