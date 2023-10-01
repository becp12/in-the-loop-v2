import { useState } from 'react';
import axios from 'axios';
import './newProjectForm.css';
// import project from '../../../models/project';
import { useNavigate } from 'react-router-dom';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function NewProjectForm() {
    const [formData, setFormData] = useState({
        title: "",
        craft: "Crochet",
        other: "",
        hook: "",
        needle: "",
        tools: "",
        rowCounter: "",
        notes: "",
        startDate: "",
        // yarn: "",
        // pattern: "",
    })
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
        setError("");
    }

    async function handleSubmit(evt) {
        // Prevent form from being submittedto the server
        evt.preventDefault();
        try {
            const { data : newProject } = await axios.post(`${serverUrl}/projects`, formData);
            // newProject.startDate = newProject.startDate.split("T")[0];
            // setProject([...project, newProject]);
            setFormData({
                title: "",
                craft: "",
                other: "",
                hook: "",
                needle: "",
                tools: "",
                rowCounter: "",
                notes: "",
                startDate: "",
                // yarn: "",
                // pattern: "",
            });
            navigate(`/projects/${newProject._id}`)
        } catch (err) {
            setError("Project could not be saved - Try Again");
        }
    }

    return (
        <div className="project-form-container container-sm">
            <form onSubmit={handleSubmit}>

                <div>
                    <label class="form-label">Project Name</label>
                    <input
                        class="form-control"
                        type="text"
                        name="title"
                        placeholder="Project Name"
                        onChange={handleChange}
                        value={formData.title}
                        required
                    />
                </div>

                <div>
                    <label class="form-label">Pick your craft
                        <select name="craft" value={formData.craft} onChange={handleChange} class="form-select">
                            <option value="crochet">Crochet</option>
                            <option value="knit">Knit</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label class="form-label">Craft Name</label>
                    <input
                        class="form-control"
                        type="text"
                        name="other"
                        placeholder="Craft Name"
                        onChange={handleChange}
                        value={formData.other}
                    />
                </div>

                <div>
                    <label class="form-label">Hook Size</label>
                    <input
                        class="form-control"
                        type="text"
                        name="hook"
                        placeholder="Hook Size"
                        onChange={handleChange}
                        value={formData.hook}
                    />
                </div>

                <div>
                    <label class="form-label">Needle Size</label>
                    <input
                        class="form-control"
                        type="text"
                        name="needle"
                        placeholder="Needle Size"
                        onChange={handleChange}
                        value={formData.needle}
                    />
                </div>

                <div>
                    <label class="form-label">Required Tools</label>
                    <input
                        class="form-control"
                        type="text"
                        name="tools"
                        placeholder="Loom, scissors, etc"
                        onChange={handleChange}
                        value={formData.tools}
                    />
                </div>

                <div>
                    <label class="form-label">Row Counter</label>
                    <input
                        class="form-control"
                        type="number"
                        name="rowCounter"
                        value={formData.rowCounter}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label class="form-label">Start Date</label>
                    <input
                    class="form-control"
                        type="Date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label class="form-label">Notes</label>
                    <textarea
                        class="form-control"
                        type="text"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Add Project</button>
            </form >
        </div >



    )



}
