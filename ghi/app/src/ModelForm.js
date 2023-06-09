import React, { useState, useEffect } from "react";


function ModelForm() {
    const setImage = async () => {
        let image = document.getElementById("bgimage")
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nOmhokGUgDBIhGMvMCerBfsQny7b74vnxw&usqp=CAU"
    }
    const handleFormChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }
    const [formValues, setFormValues] = useState({
        name: '',
        picture_url: '',
        manufacturer_id: '',
    });
    const [manufacturers, setManufacturers] = useState([]);
    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/manufacturers/');
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }
    useEffect(() => { fetchData(); }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const locationUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formValues),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const successTag = document.getElementById("successful")
            successTag.classList.remove("d-none")
            setFormValues({
                name: '',
                picture_url: '',
                manufacturer_id: '',
            })
        }
    }
    return (
        <div className="d-grid">
            <img id="bgimage" onError={setImage} style={{ 'left': '0', "position": "absolute", 'zIndex': '-1', 'height': '100%', 'width': '100%' }} src={formValues.picture_url} />
            <div className="row pt-5 mt-5" style={{ "justifyContent": "center" }}>
                <div className="col m-0 px-0 bg-white bg-opacity-75" style={{ 'maxWidth': '50%' }}>
                    <div className="shadow p-4 bg-white bg-opacity-75">
                        <h1>Add a Model</h1>
                        <div id="successful" className="alert alert-success text-center my-3 d-none">model was added!</div>
                        <form onSubmit={handleSubmit} id="create-model-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} placeholder="name" required type="text" name="name" id="name" className="form-control" value={formValues.name} />
                                <label htmlFor="name">name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} value={formValues.picture_url} placeholder="picture" required name="picture_url" type="text" id="picture" className="form-control" />
                                <label htmlFor="picture">Picture url</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={handleFormChange} required id="manufacturer" className="form-select" name="manufacturer_id">
                                    <option key='-3'>Select Manufacturer</option>;
                                    {manufacturers.map((manufacturer) => {
                                        return (
                                            <option key={manufacturer.id} value={manufacturer.id}>
                                                {manufacturer.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModelForm
