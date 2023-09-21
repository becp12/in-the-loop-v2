import axios from 'axios';
import { useEffect, useState, useContext } from 'react';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Dashboard({ AuthContext }) {
    const { user, loggedIn, checkLoginState } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(function() {
      (async () => {
        if (loggedIn === true) {
          try {
            // Get posts from server
            const { data: { posts } } = await axios.get(`${serverUrl}/user/posts`)
            setPosts(posts);
          } catch (err) {
            console.error(err);
          }
        }
      })();
    }, [loggedIn])
  
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
      <>
        <h3>Dashboard</h3>
        <button className="btn" onClick={handleLogout} >Logout</button>
        <h4>{user?.firstName}</h4>
        <br />
        <p>{user?.email}</p>
        <br />
        <img src={user?.avatar} alt={user?.name} />
        <br />
        <div>
          {posts.map((post, idx) => <div>
            <h5>{post?.title}</h5>
            <p>{post?.body}</p>
          </div>)}
        </div>
      </>
    )
  }