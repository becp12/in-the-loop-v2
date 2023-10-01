import axios from 'axios';
import './Login.css'

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Login() {
    const handleLogin = async () => {
      try {
        // Gets authentication url from backend server
        const { data: { url } } = await axios.get(`${serverUrl}/auth/url`);
        // Navigate to consent screen
        window.location.assign(url);
      } catch (err) {
        console.error(err);
      }
    }

    return (
      <div className="container-sm" id="login">
        <h3>Please login to access all the features of the app</h3>
        <button type="button" className="btn btn-info logging" onClick={handleLogin}>Login</button>
      </div>
    )
  }