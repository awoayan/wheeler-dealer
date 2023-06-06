import React, { useEffect, useState } from 'react';


function SaleForm( ) {
    const handleFormChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]:event.target.value
        })
    }
    const [formValues, setFormValues] = useState({
        price: '',
        customer: '',
        salesperson: '',
        automobile: '',
        }
    );
    const [autos, setAutos] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const fetchData = async (url, objName) => {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if(objName == 'autos'){
                setAutos(data[objName])
            }
            else if(objName == 'customers'){
                setCustomers(data[objName])
            }
            else if(objName == 'salespeople'){
                setSalespeople(data[objName])
            }
        }
    }
    useEffect(() => { fetchData('http://localhost:8090/api/customers/', 'customers'); }, [] );
    useEffect(() => { fetchData('http://localhost:8100/api/automobiles/', 'autos'); }, [] );
    useEffect(() => { fetchData('http://localhost:8090/api/salespeople/', 'salespeople'); }, [] );
    const handleSubmit = async (event) => {
        event.preventDefault();
        const youAreEl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formValues),
            headers: {
            'Content-Type': 'application/json',
            },
        };

        const response = await fetch(youAreEl, fetchConfig);
        if (response.ok) {
            const successTag = document.getElementById("successful")
            successTag.classList.remove("d-none")
            
            setFormValues({
                price: '',
                customer: '',
                salesperson: '',
                automobile: '',
            })
        }
    }
    return (
        <>
        <img className='justify-self-start' style={{'overflow':'hidden','left':'0',"position":"absolute", 'zIndex':'-5','height':'100%','width':'100%', 'boxSizing':'content-box', }} src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F026%2F561%2Fcar.jpg"/>
        <div className="row align-self-start">
            <div className="col-6 p-0 mx-auto bg-white bg-opacity-75" style={{'position':'absolute', 'left':'4em'}}>
                <div className="shadow p-4 mt-4 bg-white bg-opacity-75">
                    <h1>Add a Sale</h1>
                    <div id="successful"className="alert alert-success text-center my-3 d-none">Sale was added!</div>
                    <form onSubmit={handleSubmit} id="create-sale-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Price" required type="number" name="price" id="price" className="form-control" value={formValues.price}/>
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required id="customer" className="form-select" name="customer">
                                <option value=''>Select Customer</option>;
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            First: {customer.first_name} ; Last: {customer.last_name}
                                        </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required id="salesperson" className="form-select" name="salesperson">
                                <option value=''>Select Salesperson</option>;
                                {salespeople.map(salesperson => {
                                    return (
                                        <option key={salesperson.employee_id} value={salesperson.employee_id}>
                                            First: {salesperson.first_name} ; Last: {salesperson.last_name}
                                        </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required id="automobile" className="form-select" name="automobile">
                                <option value=''>Select Automobile</option>;
                                {autos.map(automobile => {

                                    return (

                                        <option key={automobile.vin} value={automobile.vin}>
                                            Make: {automobile.model.manufacturer.name} ; Model: {automobile.model.name}
                                        </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default SaleForm;
