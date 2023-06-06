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
              <NavLink className="nav-link" aria-current="page" to="/salesperson/">
                      List of Salespeople
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" aria-current="page" to="/salesperson/create/">
                      Add a Salesperson
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" aria-current="page" to="/sales/">
                      List of Sales
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" aria-current="page" to="/sales/create/">
                      Add a Sale
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
