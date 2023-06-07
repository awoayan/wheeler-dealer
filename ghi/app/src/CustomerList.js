import React, { useEffect, useState } from 'react';


const Delete = async (event) => {
    const identifier = event.target.id
    if (window.confirm(`Are you sure you want to delete this?`)) {
        const url = `http://localhost:8090/api/customers/${identifier}/`
        const fetchConfig = {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig)
        if (response.ok) { return (window.location.reload()) }
    }
}



function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url);
        if (!response.ok) {
            return (<h1>We're sorry. There was a problem with the request.</h1>)
        }
        const people = await response.json();
        setCustomers(people.customers)
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h1>Customers</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(person => {
                        return (
                            <tr key={person.id}>
                                <td>{person.first_name}</td>
                                <td>{person.last_name}</td>
                                <td>{person.phone_number}</td>
                                <td>{person.address}</td>
                                <td><button className='badge btn-danger' id={person.id} onClick={Delete}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}


export default CustomerList;
