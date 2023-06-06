import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function SalesPeopleList(){
    const [salespeople, setSalespeople] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);
        if (!response.ok) {
            return(<h1>We're sorry. There was a problem with the request.</h1>)
        }
        const people = await response.json();
        setSalespeople(people.salespeople)
    }
    useEffect(() => {
        fetchData();
      }, []);
    return (
        <>
        <Outlet/>
        <div>
            <h1>Salespeople</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map(person => {
                    return (
                        <tr key={person.employee_id}>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.employee_id}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
        </>
      );
}


export default SalesPeopleList;
