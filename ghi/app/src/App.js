import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import SalesPeopleList from './SalesPeopleList';
import SaleForm from './SaleForm';
import SalesList from './SalesList';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import ManufacturerForm from './ManufacturerForm';
import TechnicianList from './service/TechnicianList';
import TechnicianForm from './service/TechnicianForm';
import ManufacturerList from './ManufacturerList';
import AutomobileList from './AutomobileList';
import AppointmentList from './service/AppointmentList';
import AutomobileForm from './AutomobileForm';
import ModelForm from './ModelForm';
import ServiceHistory from './service/ServiceHistory';
import ServiceForm from './service/ServiceForm';
import VehicleList from './VehicleList';
import CreateAppointmentForm from './service/ServiceForm';
import SaleHistory from './SalesPeopleHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="salesperson/" element={<SalesPeopleList />} />
              <Route path="salesperson/create/" element={<SalesPersonForm />} />
            <Route path="customers/" element={<CustomerList />} />
              <Route path="customers/create/" element={<CustomerForm />} />
            <Route path="sales/" element={<SalesList />} />
              <Route path="sales/create/" element={<SaleForm />} />
              <Route path="sales/history" element={<SaleHistory/>} />
            <Route path="appointments/history/" element={<AppointmentList />} />
              <Route path="appointments/create/" element={<CreateAppointmentForm />} />
            <Route path="service/history/" element={<ServiceHistory />} />
              <Route path="service/create/" element={<ServiceForm />} />
            <Route path="technicians/" element={<TechnicianList />} />
              <Route path="technicians/create/" element={<TechnicianForm />} />
            <Route path="manufacturers/" element={<ManufacturerList />} />
              <Route path="manufacturers/create/" element={<ManufacturerForm />} />
            <Route path="automobiles/" element={<AutomobileList />} />
              <Route path="automobiles/create/" element={<AutomobileForm />} />
            <Route path="models/" element={<VehicleList />} />
              <Route path="models/create/" element={<ModelForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
