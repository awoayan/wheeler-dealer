import React, { useEffect, useState } from 'react';


const Delete = async (event) => {
    const identifier = event.target.id
    if(window.confirm(`Are you sure you want to delete this?`)){
        const url = `http://localhost:8090/api/salespeople/${identifier}/`
        const fetchConfig = {
            method: "delete",
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url,fetchConfig)
        if (response.ok) {return(window.location.reload())}
    }
}


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
                            <td><button className='badge btn-danger' id={person.id} onClick={Delete}>Delete</button></td>
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
