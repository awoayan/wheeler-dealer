import React, { useState } from "react";

const CreateTechnicianForm = ()=> {
    const [name, setName]=useState('');
    const [employeeno, setEmployeeno]=useState('');
    const [hasEntered, setHasEntered]=useState(false);
    const [error, setError]=useState(false);

    const handleSubmit=async(event) =>{
        event.preventDefault();
        const data = {
            name: name,
            employeeno: employeeno,

        };

        const technicianUrl = 'http://localhost:8080/api/technicians/';
        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const technicianResponse = await fetch(technicianUrl, fetchOptions);
        if (technicianResponse.ok) {
            
                setName('');
                setEmployeeno('');
                setHasEntered(true);
                setError(false);
            
            let newTechnician = await technicianResponse.json();
            // addTechnician(newTechnician);
        } else {
                setName('');
                setEmployeeno('');
                setHasEntered(true);
                setError(false);
        }
    }


        // let successMessageClasses = 'alert alert-success d-none mb-0';
        // let formClasses = '';
        // if (this.state.hasEntered) {
        //     successMessageClasses = 'alert alert-success mb-0';
        //     formClasses = 'd-none';
        //     setTimeout(() => {
        //         successMessageClasses = 'alert alert-success d-none mb-0';
        //         formClasses = '';
        //         this.setState({hasEntered: false})
        //     }, 2000);
        // }

        // let errorMessageClasses = 'alert alert-danger d-none mb-0 mt-3';
        // if (this.state.error) {
        //     errorMessageClasses = 'alert alert-danger mb-0 mt-3';
        //     setTimeout(() => {
        //         errorMessageClasses = 'alert alert-danger d-none mb-0 mt-3';
        //         this.setState({error: false})
        //     }, 5000);
        // }

        return (
            <div className="my-5 container">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} id="create-technician-form">
                                    <h1 className="card-title">Add a New Service Technician</h1>
                                    <p className="mb-3">
                                        Please add a new technician
                                    </p>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input 
                                            onChange={(e)=> setName(e.target.value)} 
                                            required placeholder="Name" 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            className="form-control" />
                                            <label htmlFor="name">Employee Name</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input 
                                            onChange={(e)=> setEmployeeno(e.target.value)} 
                                            required placeholder="Employee No." 
                                            type="text" id="employeeno" name="employeeno" 
                                            className="form-control" />
                                            <label htmlFor="employeeno">Employee No.</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-outline-dark">Add Technician</button>
                                </form>
                                {/* <div className={successMessageClasses} id="success-message">
                                    Technician has been added!
                                </div>
                                <div className={errorMessageClasses} id="error-message">
                                    Entered data not valid!
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



export default CreateTechnicianForm;
