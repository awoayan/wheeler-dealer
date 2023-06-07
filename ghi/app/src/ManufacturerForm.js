import React from "react";
import { useState } from "react";

function ManufacturerForm() {
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const [name, setName] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const locationUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify({ 'name': name }),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newShoe = await response.json();
            console.log(newShoe);
            const successTag = document.getElementById("successful")
            successTag.classList.remove("d-none")
            setName('')
        }
    }
    return (
        <div className="row align-items-center">
            <img style={{ 'overflow': 'hidden', 'left': '0', "position": "absolute", 'zIndex': '-1', 'height': '100%', 'width': '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPg6Bu5lFXrOiuALYAE01CHWGCZJvV4wIbQ&usqp=CAU" />
            <div className="col-6">
                <div className="shadow p-4 mt-4 bg-secondary">
                    <h1 className="text-white">Create a new Manufacturer</h1>
                    <div id="successful" className="alert alert-success text-center my-3 d-none">Manufacturer was added!</div>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form" className="justify-content-center">
                        <div className="form-floating mb-3 ">
                            <input onChange={handleNameChange} placeholder="Manufacturer" required type="text" name="name" id="manufacturer" className="form-control" value={name} />
                            <label htmlFor="manufacturer">Manufacturer Name</label>
                            <button className="btn btn-info w-100%">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ManufacturerForm
