import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <div className="d-flex">
                <button className="navbar-toggler navbar-dropdown d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#sales" aria-controls="sales" aria-expanded="false" aria-label="Toggle navigation">
                  <div className="navbar-brand navbar-dropdown">Sales Department</div>
                </button>
                <div className="collapse" id="sales">
                  <div className="row">
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/salesperson/">
                        List of Salespeople
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/customers/">
                        List of Customers
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/sales/">
                        List of Sales
                      </NavLink>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/salesperson/create/">
                        Add a Salesperson
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/customers/create/">
                        Add a Customer
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/sales/create/">
                        Add a Sale
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex">
                <button className="navbar-toggler navbar-dropdown d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#inventory" aria-controls="inventory" aria-expanded="false" aria-label="Toggle navigation">
                  <div className="navbar-brand navbar-dropdown">Inventory Department</div>
                </button>
                <div className="collapse" id="inventory">
                  <div className="row">
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/manufacturers/">
                        List of Manufacturers
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/automobiles/">
                        List of Automobiles
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/models/">
                        List of Vehicle Models
                      </NavLink>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/manufacturers/create/">
                        Add a Manufacturer
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/automobiles/create/">
                        Add an Automobile
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/models/create/">
                        Add a Vehicle Model
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex">
                <button className="navbar-toggler navbar-dropdown d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#services" aria-controls="services" aria-expanded="false" aria-label="Toggle navigation">
                  <div className="navbar-brand navbar-dropdown">Services Department</div>
                </button>
                <div className="collapse" id="services">
                  <div className="row">
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/technicians/">
                        List of Technicians
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/appointments/history/">
                        Service History
                      </NavLink>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/technicians/create/">
                        Add a Technician
                      </NavLink>
                    </div>
                    <div className="col ps-3 pe-3 mx-3">
                      <NavLink className="nav-link" aria-current="page" to="/appointments/">
                        Add an Appointment
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
