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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sales" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-brand">Sales Department</span>
                </button>
                <div className="collapse navbar-collapse" id="sales">
                  <div className="row">
                    <div className="col">
                      <NavLink className="nav-link d-block p-2" aria-current="page" to="/salesperson/">
                        List of Salespeople
                      </NavLink>
                      <NavLink className="nav-link d-block p-2" aria-current="page" to="/salesperson/create/">
                        Add a Salesperson
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink className="nav-link" aria-current="page" to="/sales/">
                        List of Sales
                      </NavLink>
                      <NavLink className="nav-link" aria-current="page" to="/sales/create/">
                        Add a Sale
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink className="nav-link" aria-current="page" to="/customers/">
                        List of Customers
                      </NavLink>
                      <NavLink className="nav-link" aria-current="page" to="/customers/create/">
                        Add a Customer
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
