import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function AutomobileList() {
    const [automobiles, setAutomobile] = useState([])

    const getData = async () => {
        const resp = await fetch('http://localhost:8100/api/automobiles/')
        const data = await resp.json()

        setAutomobile(data.autos)
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {automobiles.map(automobile => {
                        return (
                            <tr key={automobile.id}>
                                <td>{automobile.vin}</td>
                                <td>{automobile.color}</td>
                                <td>{automobile.year}</td>
                                <td>{automobile.model.name}</td>
                                <td>{automobile.model.manufacturer.name}</td>
                                <td><button onClick={async () => {
                                    const resp = await fetch(`http://localhost:8100/api/automobiles/${automobile.id}/`, { method: "DELETE" })
                                    const data = await resp.json()
                                    getData()
                                }}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <NavLink className="nav-link" aria-current="page" to="/automobiles/create/"><button>Add a Vehicle</button></NavLink>

            </div>
        </div>

    );
}

export default AutomobileList
