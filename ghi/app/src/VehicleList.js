import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function VehicleList() {
    const [vehicles, setVehicle] = useState([])

    const getData = async () => {
        const resp = await fetch('http://localhost:8100/api/models/')
        const data = await resp.json()

        setVehicle(data.models)
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Picture</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => {
                        return (
                            <tr key={vehicle.id}>
                                <td>{vehicle.name}</td>
                                <td>
                                    <img src={vehicle.picture_url} width="200" height="150"></img>
                                </td>
                                <td>{vehicle.manufacturer.name}</td>
                                <td><button onClick={async () => {
                                    const resp = await fetch(`http://localhost:8100/api/models/${vehicle.id}/`, { method: "DELETE" })
                                    const data = await resp.json()
                                    getData()
                                }}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <NavLink className="nav-link" aria-current="page" to="/models/create/">
                    <button>Add a Vehicle Model</button>
                </NavLink>
            </div>
        </div>

    );
}

export default VehicleList
