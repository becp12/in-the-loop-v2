import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './ProjectDetail.css';
import CrochetProject from '../../components/CraftComponents/CrochetProject/CrochetProject'
import KnitProject from '../../components/CraftComponents/KnitProject/KnitProject';
import OtherProject from '../../components/CraftComponents/OtherProject/OtherProject';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function ProjectDetail() {
    const [project, setProject] = useState(null);
    let params = useParams();

    const getProject = useCallback(async () => {

        const { data: project } = await axios.get(`${serverUrl}/projects/${params.projectId}`);

        setProject(project);
    }, [params.projectId]);

    useEffect(() => {
        getProject();
    }, [getProject]);

    return (
        <>
            {project ?
                <>
                    {project.craft === "Crochet"
                        ?
                        <CrochetProject project={project} />
                        :
                        <></>
                    }
                    {project.craft === "Knit"
                        ?
                        <KnitProject project={project} />
                        :
                        <></>
                    }
                    {project.craft === "Other"
                        ?
                        <OtherProject project={project} />
                            :
                        <></>
                    }
                </>
                :
                <>
                    {/* <img src="images/yarn-ball-load.gif" alt="loading" className="img-fluid loading-img" /> */}
                </>
            }
        </>
    )
}
