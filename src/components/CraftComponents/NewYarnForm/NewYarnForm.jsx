import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function NewYarnForm() {
    const [formData, setFormData] = useState({
        brand: "",
        subBrand: "",
        weight: "",
        color: "",
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
            const { data: newYarn } = await axios.post(`${serverUrl}/yarn`, formData);
            // newProject.startDate = newProject.startDate.split("T")[0];
            // setProject([...project, newProject]);
            setFormData({
                brand: "",
                subBrand: "",
                weight: "",
                color: "",
            });
            navigate(-1);
        } catch (err) {
            setError("Yarn could not be saved - Try Again");
        }
    }

    return (
        <div className="project-form-container container-sm">
            <h1><center>Create New Yarn</center></h1>
            <form onSubmit={handleSubmit}>

            <div>
                    <label className="form-label">Brand Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="brand"
                        placeholder="eg. Red Heart"
                        onChange={handleChange}
                        value={formData.brand}
                    />
                </div>

                <div>
                    <label className="form-label">Sub Brand</label>
                    <input
                        className="form-control"
                        type="text"
                        name="subBrand"
                        placeholder="Sub brand, if applicable, eg. Red Heart -Super Saver-"
                        onChange={handleChange}
                        value={formData.subBrand}
                    />
                </div>

                <div>
                    <label className="form-label">Weight or Ply</label>
                    <input
                        className="form-control"
                        type="text"
                        name="weight"
                        placeholder="eg. 4 / Worsted / 10Ply"
                        onChange={handleChange}
                        value={formData.weight}
                    />
                </div>

                <div>
                    <label className="form-label">Color Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="color"
                        // placeholder=""
                        onChange={handleChange}
                        value={formData.color}
                    />
                </div>

                <button className="btn bg-info" type="submit">Add Yarn</button>
            </form >
            <p className="error-message">{error}</p>
        </div >



    )
}
