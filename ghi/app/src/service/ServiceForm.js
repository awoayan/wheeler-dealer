import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";


class CreateAppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: '',
            custname: '',
            date: '',
            time: '',
            reason: '',
            hasEntered: false,
            error: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVIN = this.handleVIN.bind(this);
        this.handleCustomerName = this.handleCustomerName.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleTechnician = this.handleTechnician.bind(this);
        this.handleReason = this.handleReason.bind(this);
    }
    // [this.technicians, this.setTechnicians]=usestate([])
    async getTechniciansList () {
        const response = await fetch("http://localhost:8080/api/technicians/");
        if (response.ok) {
        const data = await response.json();
        // setTechnicians(data.technicians);
        }
    };

    // useEffect(() => {
    //     getData();
    // }, []);

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.technicians;
        delete data.hasEntered;
        delete data.error;
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
            this.setState({
                vin: '',
                custname: '',
                date: '',
                time: '',
                technician: '',
                reason: '',
                hasEntered: true,
                error: false,
            });
            let newAppointment = await appointmentResponse.json();
            this.props.addAppointment(newAppointment);
        } else {
            this.setState({
                hasEntered: false,
                error: true,
            })
        };
    };

    handleVIN(event) {
        const value = event.target.value;
        this.setState({ vin: value });
    }

    handleCustomerName(event) {
        const value = event.target.value;
        this.setState({ custname: value });
    }

    handleDate(event) {
        const value = event.target.value;
        this.setState({ date: value });
    }

    handleTime(event) {
        const value = event.target.value;
        this.setState({ time: value });
    }

    handleTechnician(event) {
        const value = event.target.value;
        this.setState({ technician: value });
    }

    handleReason(event) {
        const value = event.target.value;
        this.setState({ reason: value });
    }

    render() {
        let spinnerClasses = '';
        let promptClasses = false;
        let dropdownClasses = 'form-select d-none';
        if (this.props.technicians?.length > 0) {
            spinnerClasses = 'd-none';
            promptClasses = false;
            dropdownClasses = 'form-select';
        } else {
            dropdownClasses = 'form-select d-none';
            spinnerClasses = 'd-none';
            promptClasses = true;
        }

        let successMessageClasses = 'alert alert-success d-none mb-0';
        let formClasses = '';
        if (this.state.hasEntered) {
            successMessageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
            setTimeout(() => {
                successMessageClasses = 'alert alert-success d-none mb-0';
                formClasses = '';
                this.setState({ hasEntered: false })
            }, 2000);
        }

        let errorMessageClasses = 'alert alert-danger d-none mb-0 mt-3';
        if (this.state.error) {
            errorMessageClasses = 'alert alert-danger mb-0 mt-3';
            setTimeout(() => {
                errorMessageClasses = 'alert alert-danger d-none mb-0 mt-3';
                this.setState({ error: false })
            }, 5000);
        }

        return (
            <>
                <div className="my-5 container">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-body">
                                    <form className={formClasses} onSubmit={this.handleSubmit} id="create-appointment-form">
                                        <h1 className="card-title">Schedule a Service Appointment</h1>
                                        <p className="mb-3">
                                            Please schedule a new appointment
                                        </p>
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input onChange={this.handleVIN} value={this.state.vin} required placeholder="VIN No." type="text" id="vin" name="vin" className="form-control" />
                                                <label htmlFor="vin">VIN No. (17 Characters)</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input onChange={this.handleCustomerName} value={this.state.custname}required placeholder="Customer Name" type="text" id="custname" name="custname" className="form-control" />
                                                <label htmlFor="custname">Customer Name</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input onChange={this.handleDate} value={this.state.date} required placeholder="Appointment Date" type="date" id="date" name="date" className="form-control" />
                                                <label htmlFor="date">Appointment Date</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input onChange={this.handleTime} value={this.state.time} required placeholder="Appointment Time" type="time" id="time" name="time" className="form-control" />
                                                <label htmlFor="time">Appointment Time</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div animation="border" className={spinnerClasses} />
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
                                            <select onChange={this.handleTechnician} value={this.state.technician} required name="technician" id="technician" className={dropdownClasses}>
                                                <option value="">Choose a Technician</option>
                                                {this.props.technicians?.map(technician => {
                                                    return (
                                                        <option key={technician.employeeno} value={technician.employeeno}>
                                                            {technician.employeeno} - {technician.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reason">Appointment Reason</label>
                                            <textarea onChange={this.handleReason} value={this.state.reason} className="form-control" id="reason" rows="3" name="reason"></textarea>
                                        </div>
                                        <button className="btn btn-outline-dark">Schedule Appointment</button>
                                    </form>
                                    <div className={successMessageClasses} id="success-message">
                                        Appointment has been scheduled!
                                    </div>
                                    <div className={errorMessageClasses} id="error-message">
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
}
export default CreateAppointmentForm;
