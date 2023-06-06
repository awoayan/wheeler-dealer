import React, { useState } from "react";


function SalesPersonForm( ) {
    const handleFormChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]:event.target.value
        })
    }
    const [formValues, setFormValues] = useState({
        first_name:'',
        last_name:'',
        employee_id:'',
        }
    );
    const handleSubmit = async (event) => {
        event.preventDefault();
        const locationUrl = 'http://localhost:8090/api/salespeople/';
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
                first_name:'',
                last_name:'',
                employee_id:''
            })
        }
    }
    return (
        <>
        <img className='justify-self-start' style={{'overflow':'hidden','left':'0',"position":"absolute", 'zIndex':'-5','height':'100%','width':'100%', 'boxSizing':'content-box', }} src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F026%2F561%2Fcar.jpg"/>
        <div className="row align-self-start">
            <div className="col-6 p-0 mx-auto bg-white bg-opacity-75" style={{'position':'absolute', 'left':'4em'}}>
                <div className="shadow p-4 mt-4 bg-white bg-opacity-75">
                    <h1>Add a Salesperson</h1>
                    <div id="successful"className="alert alert-success text-center my-3 d-none">Salesperson was added!</div>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="First Name" required type="text" name="first_name" id="firstName" className="form-control" value={formValues.first_name}/>
                            <label htmlFor="firstName">First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formValues.last_name} placeholder="Last Name" required name="last_name" type="text" id="lastName" className="form-control" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange}  value={formValues.employee_id} placeholder="employee_id" required type="text" name="employee_id" id="employeeId" className="form-control" />
                            <label htmlFor="employeeId">Employee ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default SalesPersonForm
