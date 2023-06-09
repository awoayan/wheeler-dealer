import React, { useEffect, useState } from 'react';


function SaleHistory() {
    const [sales, setSales] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [person, setPerson] = useState('');
    const [display, setDisplay] = useState([])
    const fetchData = async (url, objName) => {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (objName == 'sales') {
                setSales(data[objName])
            }
            else if (objName == 'salespeople') {
                setSalespeople(data[objName])
            }
        }
    }
    useEffect(() => { fetchData('http://localhost:8090/api/sales/', 'sales'); }, []);
    useEffect(() => { fetchData('http://localhost:8090/api/salespeople/', 'salespeople'); }, []);

    const handlePersonChange = (e) => {
        setPerson(e.target.value);
        let temp = sales.filter(sale => sale.salesperson.id == e.target.value)
        setDisplay(temp)
        }
    return (
        <div >
            <div className='w-100% h-100%' style={{ 'left': '0', "position": "absolute", 'zIndex': '-1', 'height': '100%', 'width': '100%', "background": "linear-gradient(217deg, rgba(160,160,160,.8), rgba(155,155,155,0) 70.71%), linear-gradient(127deg, rgba(160,160,160,.8), rgba(155,155,155,0) 70.71%), linear-gradient(336deg, rgba(160,160,160,.8), rgba(155,155,155,0) 70.71%)" }} />
            <div className="p-5">
                <div className="shadow p-5 bg-light bg-opacity-75">
                    <div className="m-3">
                        <select onChange={handlePersonChange} required id="customer" className="form-select w-50" name="customer">
                            <option key='-3'>Select Salesperson</option>;
                            {salespeople.map((person) => {
                                return (
                                    <option key={person.id} value={person.id}>
                                        {person.first_name} {person.last_name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>SalesPerson</th>
                                <th>Customer</th>
                                <th>VIN</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className="text-align-justify w-100">
                        {display.map((sale) => {
                            return (
                            <tr key={sale.id} id={sale.id}>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                <td>{sale.automobile.vin}</td>
                                <td>{sale.price}</td>
                            </tr>
                        )})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SaleHistory;
