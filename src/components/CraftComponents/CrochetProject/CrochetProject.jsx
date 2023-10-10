export default function CrochetProject({ project }) {

    return (
        <div className="project-detail-container container-sm">
            <h1>{project.title}</h1>
            <div className="detail-container">
                <img src={!project.image[0] ? `/images/knitted-clothes.jpg` : `${project.image[0]}`} className="img-fluid" />
                <div className="project-details">
                    <h2>Craft: {project.craft}</h2>
                    <h3>Hook Size: {project.hook}</h3>
                    {project.tools
                        ?
                        <h3>Required tools: {project.tools}</h3>
                        :
                        <></>
                    }
                    <p>{project.notes}</p>
                </div>
            </div>
        </div>
    )
}
