import React from 'react';
import Button from 'react-buttonstrap/button';
import ButtonGroup from 'react-bootstrap/Table';
import Table from 'react-bootstrap/Table';


export default function AppointmentList({ appointments, cancelAppointments, finishAppointment }) {
    return (
        <>
            <h1>Current Service Appointments</h1>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Valued Customer</th>
                        <th>Vehicle VIN</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Appointment Options</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments && appointments.map(appointment => {
                        return appointment.active === true ?
                            <tr key={appointment.href}>
                                <td>
                                    {appointment.valued === true &&
                                        <img className='text-center' src="/VIP-Symbol.svg" alt="" width="45px" height="auto" />
                                    }
                                </td>
                                <td>{appointment.vin}</td>
                                <td>{appointment.custname}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.reason}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button variant="warning" onClick={() => cancelAppointment(`${appointment.href}`)}>Cancel</Button>
                                        <Button variant="success" onClick={() => finishAppointment(`${appointment.href}`)}>Finished</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            : null
                    })}
                </tbody>
            </Table>
        </>
    );
};
