import React, { useEffect, useState } from 'react';


function SaleForm( ) {
    const setImage = async ()=> {
        let image = document.getElementById("bgimage")
        image.src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F026%2F561%2Fcar.jpg"

    }
    const handleFormChange = (event) => {
        if(event.target.name=="automobile"){
            let image = document.getElementById("bgimage")
            let matched = false
            for(let car of autos){
                if (car.vin == event.target.value){
                    matched = true
                    image.src = car.model.picture_url
                }
            }
            if(!matched){
                setImage()
            }
            setFormValues({
                ...formValues,
                [event.target.name]:event.target.value
            })
        }
        setFormValues({
            ...formValues,
            [event.target.name]:event.target.value
        })
    }
    const [formValues, setFormValues] = useState(
        {
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
        <img id="bgimage"className='justify-self-start' onError={setImage} style={{'left':'0',"position":"absolute", 'zIndex':'-5','height':'100%','width':'100%', 'boxSizing':'content-box', }} src=''/>
        <div className="row align-self-start p-2">
            <div className="col-6 p-0 mt-3 bg-light bg-opacity-75" style={{'position':'absolute', 'left':'4em','width':'40%'}}>
                <div className="shadow p-4 bg-light bg-opacity-75">
                    <h1>Add a Sale</h1>
                    <div id="successful"className="alert alert-success text-center my-3 d-none">Sale was added!</div>
                    <form onSubmit={handleSubmit} id="create-sale-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Price" required type="number" name="price" id="price" className="form-control" value={formValues.price}/>
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required id="customer" className="form-select" name="customer">
                                <option key='-3'>Select Customer</option>;
                                {customers.map((customer) => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.first_name} {customer.last_name}
                                        </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required id="salesperson" className="form-select" name="salesperson">
                                <option key='-2' value=''>Select Salesperson</option>;
                                {salespeople.map((salesperson) => {
                                    return (
                                        <option key={salesperson.id} value={salesperson.employee_id}>
                                            {salesperson.first_name} {salesperson.last_name}
                                        </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required id="automobile" className="form-select" name="automobile">
                                <option key='-1' value='123'>Select Automobile</option>;
                                {autos.map((automobile) => {

                                    return (
                                        <option key={automobile.id} value={automobile.vin}>
                                            {automobile.model.manufacturer.name} {automobile.model.name}
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
