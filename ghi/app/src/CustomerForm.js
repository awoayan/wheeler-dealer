import React, { useState } from "react";


function CustomerForm() {
    const handleFormChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }
    const [formValues, setFormValues] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        address: '',
    }
    );
    const handleSubmit = async (event) => {
        event.preventDefault();
        const locationUrl = 'http://localhost:8090/api/customers/';
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
                first_name: '',
                last_name: '',
                address: '',
                phone_number: ''
            })
        }
    }
    return (
        <div className="d-grid">
            <img style={{ 'overflow': 'hidden', 'left': '0', "position": "absolute", 'zIndex': '-1', 'height': '100%', 'width': '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlSQVG53-Z0gB5M9nSsg9zvB5Fu2mwR8qsIQ&usqp=CAU" />
            <div className="row pt-5 mt-5" style={{ "justifyContent": "center" }}>
                <div className="col m-0 px-0 bg-white bg-opacity-75" style={{ 'maxWidth': '50%' }}>
                    <div className="shadow p-4 bg-white bg-opacity-75">
                        <h1>Add a Customer</h1>
                        <div id="successful" className="alert alert-success text-center my-3 d-none">Customer was added!</div>
                        <form onSubmit={handleSubmit} id="create-customer-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} placeholder="First Name" required type="text" name="first_name" id="firstName" className="form-control" value={formValues.first_name} />
                                <label htmlFor="firstName">First name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} value={formValues.last_name} placeholder="Last Name" required name="last_name" type="text" id="lastName" className="form-control" />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} value={formValues.phone_number} placeholder="Phone Number" required type="text" name="phone_number" id="phone" className="form-control" />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleFormChange} value={formValues.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                                <label htmlFor="address">Address</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerForm
