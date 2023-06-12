import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ 'position': 'sticky', 'top': '0', 'zIndex': '2' }}>
      <div className="container-fluid" >
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div class="btn-group">
              <button class="btn text-white dropdown-toggle bg-success" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Sales Department
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><NavLink className="dropdown-item" aria-current="page" to="/salesperson/">List of Salespeople</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/customers/">List of Customers</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/sales/">List of Sales</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/sales/history">Sales History</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/salesperson/create/">Add a Salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/customers/create/">Add a Customer</NavLink></li>
                <li><NavLink className="dropdown-item" aria-current="page" to="/sales/create/">Add a Sale</NavLink></li>
              </ul>
            </div>


              <div class="btn-group">
                <button class="btn text-white dropdown-toggle bg-success" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Inventory Department
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><NavLink className="dropdown-item" aria-current="page" to="/manufacturers/">List of Manufacturers</NavLink></li>
                  <li><NavLink className="dropdown-item" aria-current="page" to="/automobiles/">List of Automobiles</NavLink></li>
                  <li><NavLink className="dropdown-item" aria-current="page" to="/models/">List of Vehicle Models</NavLink></li>
                  <li><NavLink className="dropdown-item" aria-current="page" to="/manufacturers/create/">Add a Manufacturer</NavLink></li>
                  <li><NavLink className="dropdown-item" aria-current="page" to="/automobiles/create/">Add an Automobile</NavLink></li>
                  <li><NavLink className="dropdown-item" aria-current="page" to="/models/create/">Add a Vehicle Model</NavLink></li>
                </ul>
              </div>

              <div class="btn-group">
                <button class="btn text-white dropdown-toggle bg-success" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Service Department
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><NavLink className="dropdown-item" aria-current="page" to="/technicians/">List of Technicians</NavLink></li>
                  <li><NavLink className="dropdown-item" aria-current="page" to="/appointments/history/">Service History</NavLink></li>
                  <li><NavLink className="dropdown-item" aria-current="page" to="/technicians/create/">Add a Technician</NavLink></li>
                  <li><NavLink className="dropdown-item" aria-current="page" to="/appointments/create">Add an Appointment</NavLink></li>
                </ul>
              </div>


          </div>
          </div>
          </nav>
  )
}

export default Nav;
