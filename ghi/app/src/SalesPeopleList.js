import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Delete = async (event) => {
    const identifier = event.target.id
    if (window.confirm(`Are you sure you want to delete this?`)) {
        const url = `http://localhost:8090/api/salespeople/${identifier}/`
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


function SalesPeopleList() {
    const [salesList, setSalesList] = useState([]);
    const SetSales = async () => {
        const data = await fetch(`http://localhost:8090/api/sales/`)
        const sales = await data.json()
        setSalesList(sales.sales)
    }
    useEffect(() => {SetSales();}, [])
    const [salespeople, setSalespeople] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);
        if (!response.ok) {
            return (<h1>We're sorry. There was a problem with the request.</h1>)
        }
        const people = await response.json();
        setSalespeople(people.salespeople)
    }
    useEffect(() => {fetchData();}, [])
    return (
        <div>
            <h1>Salespeople</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                        <th>Sale History</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map(person => {
                        return (
                            <tr  key={person.employee_id}>

                                <td>{person.first_name}</td>
                                <td>{person.last_name}</td>
                                <td>{person.employee_id}</td>
                                <td className="dropdown"><button className='badge bg-info rounded-pill text-dark dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false" value={person.id}>History</button>
                                <li id={person.id} className="dropdown-menu w-100% px-5 justify-content-center " aria-labelledby={person.id}>
                                    <hgroup className='dropdown-item px-5 d-flex justify-content-center'>
                                        <h3 className="d-inline pe-4">Price</h3>
                                        <h3 className="d-inline px-5 ms-2">Customer</h3>
                                        <h3 className="d-inline ps-2">Automobile VIN</h3>
                                    </hgroup>
                                        {salesList.map(sale => {
                                            if(sale.salesperson.employee_id == person.employee_id){
                                                return (
                                                <Link key={sale.id} className='dropdown-item mx-1 d-flex justify-content-end' onClick="" to="/sales">
                                                    <p className="d-inline ps-3">{sale.price}</p>
                                                    <p className="d-inline px-5 mx-5">{sale.customer.first_name} {sale.customer.last_name}</p>
                                                    <p className="d-inline pe-5 me-2">{sale.automobile.vin}</p>
                                                </Link>
                                                )
                                            }
                                        })}
                                </li>
                                </td>
                                <td><button className='badge rounded-pill btn-danger' id={person.id} onClick={Delete}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}


export default SalesPeopleList;
