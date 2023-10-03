import { useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ProjectTile from "../../components/ProjectTile/ProjectTile"
import "./Projects.css"

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Projects({ AuthContext }) {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [projects, setProjects] = useState(null);

  const getProjects = useCallback(async () => {

    if (context.loggedIn === undefined)
      return;

    if (context.loggedIn === false) {
      navigate(`/`);
      return;
    }

    const { data: projects } = await axios.get(`${serverUrl}/projects/`);
    setProjects(projects);
  }, [context, navigate]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);


  return (
    <>
      {projects ?
        <>
          <div className="container-sm project-container">
            <Link to="/projects/new" className="add-box">
              <div className="card" id="project-tile">
                <div className="project-img-container add-button">
                  <img src="/images/plus-symbol.png" className="card-img-top" alt="craft project" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Add Project</h5>
                </div>
              </div>
            </Link>
            {projects?.map(project =>
              <ProjectTile project={project} />
            )}
          </div>
        </>
        :
        <>
          <img src="images/yarn-ball-load.gif" alt="loading" />
        </>
      }
    </>
  );
}