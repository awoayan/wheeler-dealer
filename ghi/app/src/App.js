import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import SalesPeopleList from './SalesPeopleList';
import SaleForm from './SaleForm';
import SalesList from './SalesList';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SalesPersonHistory from './SalesPersonHistory';
import ManufacturerForm from './ManufacturerForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salesperson/" element={<SalesPeopleList />}>
            <Route path=":id/" element={<SalesPersonHistory />} />
            </Route>
            <Route path="salesperson/create/" element={<SalesPersonForm />} />
          <Route path="customers/" element={<CustomerList />}/>
            <Route path="customers/create/" element={<CustomerForm />} />
          <Route path="sales/" element={<SalesList />} />
            <Route path="sales/create/" element={<SaleForm />} />
          <Route path="appointments/" element={<AppointmentList />} />
            <Route path="appointments/create/" element={"imported js funcion for appointment form"} />
          <Route path="technicians/" element={<TechnicianList /> } />
            <Route path="technicians/create/" element={<TechnicianForm />} />
          <Route path="manufacturers/" element={<ManufacturerList />} />
            <Route path="manufacturers/create/" element={<ManufacturerForm/>} />
          <Route path="automobiles/" element={"imported js funcion for automobile list"} />
            <Route path="automobiles/create/" element={"imported js funcion for automobile form"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
