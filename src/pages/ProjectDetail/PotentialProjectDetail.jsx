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
        <If condition={project}>
            <Choose>
                <When condition={project.craft === "Crochet"}>
                    <CrochetProject project={project} />
                </When>
                <When condition={project.craft === "Knit"}>
                    <KnitProject project={project} />
                </When>
                <When condition={project.craft === "Other"}>
                    <OtherProject project={project} />
                </When>
            </Choose>
        </If>
    )
}
