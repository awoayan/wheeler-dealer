import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";


const CreateAppointmentForm = () => {
    const [vin, setVin]=useState('')
    const [custname, setCustName]=useState('')
    const [date, setDate]=useState('')
    const [time, setTime]=useState('')
    const [reason, setReason]=useState('')
    const [technician, setTechnician]=useState('')

    const [hasEntered, setHasEntered]=useState(false);
    const [error, setError]=useState(false);
    const [technicians, setTechnicians]=useState([]);
    
    
    useEffect(() => {
        const getTechniciansList = async () =>{
        const response = await fetch("http://localhost:8080/api/technicians/");
        if (response.ok) {
        const data = await response.json();
        // setTechnicians(data.technicians);
        }
    };
    getTechniciansList();
    },[]);

    
    const handleSubmit=async(event) => {
        event.preventDefault();
        const data={}
        data.vin = vin
        data.custname = custname
        data.date = date
        data.time = time
        data.technician = technician
        data.reason = reason
        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const appointmentResponse = await fetch(appointmentUrl, fetchOptions);
        if (appointmentResponse.ok) {
            setVin('')
            setCustName('')
            setDate('')
            setTime('')
            setReason('')
            setTechnician('')
            setHasEntered(true);
            setError(false);
            let newAppointment = await appointmentResponse.json();
            
        } else {
            setHasEntered(false);
            setError(true);
        };
    };

    const handleVIN=(event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleCustomerName=(event) => {
        const value = event.target.value;
        setCustName(value);
    }

    const handleDate=(event) => {
        const value = event.target.value;
        setDate(value);
    }

    const handleTime=(event) => {
        const value = event.target.value;
        setTime(value);
    }

    const handleTechnician=(event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleReason=(event) => {
        const value = event.target.value;
        setReason(value);
    }

    // render(); {
    //     let spinnerClasses = '';
    //     let promptClasses = false;
    //     let dropdownClasses = 'form-select d-none';
    //     if (props.technicians?.length > 0) {
    //         spinnerClasses = 'd-none';
    //         promptClasses = false;
    //         dropdownClasses = 'form-select';
    //     } else {
    //         dropdownClasses = 'form-select d-none';
    //         spinnerClasses = 'd-none';
    //         promptClasses = true;
    //     }

    //     let successMessageClasses = 'alert alert-success d-none mb-0';
    //     let formClasses = '';
    //     if (this.state.hasEntered) {
    //         successMessageClasses = 'alert alert-success mb-0';
    //         formClasses = 'd-none';
    //         setTimeout(() => {
    //             successMessageClasses = 'alert alert-success d-none mb-0';
    //             formClasses = '';
    //             this.setState({ hasEntered: false })
    //         }, 2000);
    //     }

    //     let errorMessageClasses = 'alert alert-danger d-none mb-0 mt-3';
    //     if (this.state.error) {
    //         errorMessageClasses = 'alert alert-danger mb-0 mt-3';
    //         setTimeout(() => {
    //             errorMessageClasses = 'alert alert-danger d-none mb-0 mt-3';
    //             this.setState({ error: false })
    //         }, 5000);
    //     }

        return (
            <>
                <div className="my-5 container">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-body">
                                    <form className="formClasses" onSubmit={handleSubmit} id="create-appointment-form">
                                        <h1 className="card-title">Schedule a Service Appointment</h1>
                                        <p className="mb-3">
                                            Please schedule a new appointment
                                        </p>
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input onChange={handleVIN} value={vin} required placeholder="VIN No." type="text" id="vin" name="vin" className="form-control" />
                                                <label htmlFor="vin">VIN No. (17 Characters)</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input onChange={handleCustomerName} value={custname}required placeholder="Customer Name" type="text" id="custname" name="custname" className="form-control" />
                                                <label htmlFor="custname">Customer Name</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input onChange={handleDate} value={date} required placeholder="Appointment Date" type="date" id="date" name="date" className="form-control" />
                                                <label htmlFor="date">Appointment Date</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input onChange={handleTime} value={time} required placeholder="Appointment Time" type="time" id="time" name="time" className="form-control" />
                                                <label htmlFor="time">Appointment Time</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div animation="border" className="spinnerClasses" />
                                        </div>
                                            <div>
                                                <div>Uh oh, we have no technicians!<div/>
                                                <p>
                                                    Please add a technician to the database in order to proceed with scheduling a service appointment.
                                                </p>
                                                <hr />
                                                <div className="d-flex justify-content-end">
                                                    <button className="button btn- ">
                                                    <NavLink className={"nav-link"} to="/technicians/create/" variant="outline-warning">
                                                        Add a Technician
                                                    </NavLink>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <select onChange={handleTechnician} value={technician} required name="technician" id="technician" className="dropdownClasses">
                                                <option value="">Choose a Technician</option>
                                                {technicians?.map(technician => {
                                                    return (
                                                        <option key={technician.id} value={technician.id}>
                                                            {technician.employeeno} - {technician.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reason">Appointment Reason</label>
                                            <textarea onChange={handleReason} value={reason} className="form-control" id="reason" rows="3" name="reason"></textarea>
                                        </div>
                                        <button className="btn btn-outline-dark">Schedule Appointment</button>
                                    </form>
                                    <div className="successMessageClasses" id="success-message">
                                        Appointment has been scheduled!
                                    </div>
                                    <div className="errorMessageClasses" id="error-message">
                                        Entered data not valid!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default CreateAppointmentForm;
