import React from "react";
import { useState, useEffect } from "react";

function ShoeForm( ) {
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const [name, setName] = useState('');
    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/bins/');
        if (response.ok) {
            const data = await response.json();
            setBins(data.bins);
            console.log(data.bins)
        }
    }
    useEffect(() => { fetchData(); }, [] );
    const handleSubmit = async (event) => {
        event.preventDefault();
        const locationUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify({'name':name}),
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
            <img className="col-4 bg-white shadow d-flex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPg6Bu5lFXrOiuALYAE01CHWGCZJvV4wIbQ&usqp=CAU" alt="" />
            <div className="col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new Manufacturer</h1>
                    <div id="successful"className="alert alert-success text-center my-3 d-none">Manufacturer was added!</div>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Manufacturer" required type="text" name="name" id="manufacturer" className="form-control" value={name}/>
                            <label htmlFor="manufacturer">Manufacturer</label>
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ShoeForm
