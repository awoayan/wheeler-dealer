import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function TechnicianList({ technicians, deleteTech }) {
    return (
        <>
            <h1>Available Service Technicians</h1>
            <Table striped hover>
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
                                    <Button variant="danger" onClick={() => deleteTech(`${technician.href}`)}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    )
}
