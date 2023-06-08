import React from 'react';
import { useState, useEffect } from "react";

const TechnicianList = () => {
const [technicians, setTechnician] = useState([]);

const getData = async () => {
    const response = await fetch("http://localhost:8080/api/technicians/");
    if (response.ok) {
    const data = await response.json();
    setTechnician(data.technicians);
    }
};

useEffect(() => {
    getData();
}, []);

const handleDelete = async (event) => {
    const url = `http://localhost:8080/api/technicians/${event.target.id}`;

    const fetchConfigs = {
    method: "Delete",
    headers: {
        "Content-Type": "application/json",
    },
    };
    const response = await fetch(url, fetchConfigs);
    const data = await response.json();

    setTechnician(
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
            <table striped hover>
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
                        >
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
