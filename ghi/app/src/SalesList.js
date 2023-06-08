import React, { useEffect, useState } from 'react';


const Delete = async (event) => {
    const identifier = event.target.id
    if (window.confirm(`Are you sure you want to delete this?`)) {
        const url = `http://localhost:8090/api/sales/${identifier}/`
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


function SalesList() {
    const [sales, setSales] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (!response.ok) {
            return (<h1>We're sorry. There was a problem with the request.</h1>)
        }
        const listOfSales = await response.json();
        setSales(listOfSales.sales)
    }
    useEffect(() => { fetchData(); }, [])

    return (
        <>
        <div className='w-100% h-100%' style={{'left': '0', "position": "absolute", 'zIndex': '-1', 'height': '100%', 'width': '100%' ,"background": "linear-gradient(217deg, rgba(160,160,160,.8), rgba(155,155,155,0) 70.71%), linear-gradient(127deg, rgba(160,160,160,.8), rgba(155,155,155,0) 70.71%), linear-gradient(336deg, rgba(160,160,160,.8), rgba(155,155,155,0) 70.71%)"}}/>
            <div>
                <h1>Sales</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th>Customer</th>
                            <th>SalesPerson</th>
                            <th>Automobile</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td>{sale.price}</td>
                                    <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                    <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                    <td>{sale.automobile.vin}</td>
                                    <td><button className='badge btn-danger' id={sale.id} onClick={Delete}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}


export default SalesList;
