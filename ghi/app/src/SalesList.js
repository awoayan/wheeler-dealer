import React, { useEffect, useState } from 'react';


function SalesList(){
    const [sales, setSales] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (!response.ok) {
            return(<h1>We're sorry. There was a problem with the request.</h1>)
        }
        const listOfSales = await response.json();
        setSales(listOfSales.sales)
    }
    useEffect(() => { fetchData();},[])

    return (
        <>
        <div>
            <h1>Sales</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Customer</th>
                        <th>SalesPerson</th>
                        <th>Automobile</th>
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
