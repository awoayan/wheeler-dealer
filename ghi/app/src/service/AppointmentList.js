import React from 'react';


function AppointmentList({ appointments, cancelAppointments, finishAppointment }) {
    return (
        <>
            <h1>Current Service Appointments</h1>
            <table striped hover>
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
                                    <buttongroup>
                                        <button>Cancel</button>
                                        <button>Finished</button>
                                    </buttongroup>
                                </td>
                            </tr>
                            : null
                    })}
                </tbody>
            </table>
        </>
    );
};
export default AppointmentList;