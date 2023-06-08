import React, { useState, useEffect } from "react";


function AutomobileForm() {
    const handleFormChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }
    const [formValues, setFormValues] = useState({
        color: '',
        year: '',
        vin: '',
        model_id:''
    });
    const [models, setModels] = useState([]);
    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/models/');
        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    }
    useEffect(() => { fetchData(); }, [] );
    const handleSubmit = async (event) => {
        event.preventDefault();
        const locationUrl = 'http://localhost:8100/api/automobiles/';
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
                color: '',
                year: '',
                vin: '',
                model_id:''
            })
        }
    }
    return (
        <div className="d-grid">
            <img id="bgimage" style={{'left': '0', "position": "absolute", 'zIndex': '-1', 'height': '100%', 'width': '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRT9aPJ1_GMEoUe7a1x0KZ3XYhTPgW3oWmg&usqp=CAU" />
            <div className="row pt-5 mt-5" style={{ "justifyContent": "center" }}>
                <div className="col m-0 px-0 bg-white bg-opacity-75" style={{ 'maxWidth': '50%' }}>
                    <div className="shadow p-4 bg-white bg-opacity-75">
                        <h1>Add an Automobile</h1>
                        <div id="successful" className="alert alert-success text-center my-3 d-none">Automobile was added!</div>
                        <form onSubmit={handleSubmit} id="create-automobile-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} placeholder="color" required type="text" name="color" id="color" className="form-control" value={formValues.color} />
                                <label htmlFor="color">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} value={formValues.year} placeholder="year" required name="year" type="number" id="year" className="form-control" />
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" value={formValues.vin} />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={handleFormChange} required id="model" className="form-select" name="model_id">
                                    <option>Select Model</option>;
                                    {models.map((model) => {
                                        return (
                                            <option key={model.id} value={model.id}>
                                                {model.name}
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

export default AutomobileForm
