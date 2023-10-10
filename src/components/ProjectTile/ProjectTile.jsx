import "./ProjectTile.css"

export default function ProjectTile({ project }) {

    return (
        <>
            <div className="card mb-3 border-dark" id="project-tile">
                <div className="project-img-container">
                    <img src={!project.image[0] ? `/images/knitted-clothes.jpg` : `${project.image[0]}`} className="card-img-top" alt="craft project" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">
                        {project.craft === "Crochet" || project.craft === "Knit" ?
                            <p>{project.craft}</p>
                            :
                            <p>{project.other}</p>
                        }
                    </p>
                    <p>
                        {project.craft === "Crochet" ? <p>Hook: {project.hook}</p> : <></>}
                        {project.craft === "Knit" ? <p>Needles: {project.needle}</p> : <></>}
                        {project.craft === "Other" ? <p>Tools: {project.tools}</p> : <></>}
                    </p>
                    {/* <p>Creator: {project.user.firstName}</p> */}
                    <a href={`/projects/${project._id}`}><button className="btn btn-primary">Details</button></a>
                </div>
            </div>
        </>
    );
}