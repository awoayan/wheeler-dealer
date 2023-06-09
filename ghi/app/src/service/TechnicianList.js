import React from 'react';
import { useState, useEffect } from "react";

const TechnicianList = () => {
const [technicians, setTechnicians] = useState([]);

const getData = async () => {
    const response = await fetch("http://localhost:8080/api/technicians/");
    if (response.ok) {
    const data = await response.json();
    setTechnicians(data.technicians);
    }
};

useEffect(() => {
    getData();
}, []);

const handleDelete = async (event) => {
    const url = `http://localhost:8080/api/technicians/${event.target.id}`;

    const fetchConfigs = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    };
    const response = await fetch(url, fetchConfigs);
    console.log(event)
    const data = await response.json();

    setTechnicians(
    technicians.filter(
        (technician) => String(technician.id) !== event.target.id
    )
    );
};
    return (
        <>
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Available Service Technicians</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee No.</th>
                        <th>Name</th>
                        <th align='right' width="100px"></th>
                    </tr>
                </thead>
                <tbody>
                    {technicians && technicians.map(technician => {
                        return (
                            <tr key={technician.employeeno}>
                                <td>{technician.employeeno}</td>
                                <td>{technician.name}</td>
                                <td>
                                <button
                        onClick={handleDelete}
                        id={technician.id}
                        className="btn btn-danger"
                        >DELETE
                        </button>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        </div>
    </div>
    </>
);
};

export default TechnicianList;
