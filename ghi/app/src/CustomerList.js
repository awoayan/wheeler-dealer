import React, { useEffect, useState } from 'react';


function CustomerList(){
    const [salespeople, setCustomers] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url);
        if (!response.ok) {
            return(<h1>We're sorry. There was a problem with the request.</h1>)
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
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map(person => {
                    return (
                        <tr key={person.id}>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.phone_number}</td>
                            <td>{person.address}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
      );
}


export default CustomerList;
