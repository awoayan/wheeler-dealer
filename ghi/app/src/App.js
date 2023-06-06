import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import SalesPeopleList from './SalesPeopleList';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salesperson/" element={<SalesPeopleList />} />
            <Route path="salesperson/create/" element={<SalesPersonForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
