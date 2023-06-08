import React, { useState } from 'react';



function ServiceHistory({ appointments }) {
    const [search, setSearch] = useState("");
    return (
        <>
            <h1>Service Appointments History</h1>
            <div className="container" style={{ marginTop: '20px' }}>
                <div className="pb row">
                    <form id="form_search" name="form_search" method="GET" action="" className="form-inline">
                        <div className="form-group">
                            <div className="input-group">
                                <input onChange={event => setSearch(event.target.value)} className="form-control" type="text" placeholder="Search Service History by Vehicle VIN No." />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Vehicle VIN</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Appointment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments && appointments.map(appointment => {
                        return appointment.vin.toUpperCase().includes(search.toUpperCase()) ?
                            <tr key={appointment.href}>
                                <td>{appointment.vin}</td>
                                <td>{appointment.custname}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.reason}</td>
                                <td>{renderStatus(appointment)}</td>
                            </tr>
                            : null
                    })}
                </tbody>
            </table>
        </>
    )
}

function renderStatus(apt) {
    if (apt.finished === true) {
        return "Finished";
    } else if (apt.cancelled === true) {
        return "Cancelled";
    } else {
        return "Active";
    }
}

export default ServiceHistory;
