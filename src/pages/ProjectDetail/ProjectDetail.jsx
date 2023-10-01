import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function ProjectDetail() {
    const [project, setProject] = useState(null);
    let params = useParams();

    const getProject = useCallback(async () => {
        
        const { data: project } = await axios.get(`${serverUrl}/projects/${params.projectId}`);
        
        setProject(project);
    },[]);

    useEffect( () => {
        getProject();
    },[getProject]);

    return (
        <>
            { project ?
            <>
                <h2>{project.title}</h2>
                <h3>{project.craft}</h3>
                <h4>{project.hook}</h4>
                <p>{project.notes}</p>
            </>
            :
            <>
                <img src="images/yarn-ball-load.gif" />
            </>
            }
        </>
        ) 
}
