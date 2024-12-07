import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEmployeeComponent from './components/Employee/AddEmployeeComponent';
import ListEmployeeComponent from './components/Employee/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Employee from './components/Employee/Employee';
import Books from './components/Books/Books';
import ListBook from './components/Books/ListBook';
import ListBooksEmp from './components/Books/ListBooksEmp';
import UpdateBook from './components/Books/UpdateBook';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element={<Home />}></Route>
              <Route path = "/employees" element={<ListEmployeeComponent/>}></Route>
              <Route path="/employee/:id" element={<Employee/>}></Route>
              <Route path="/employee/:id/books" element={<Books/>}></Route>
              <Route path='/customer/:id' element={<ListBook/>}></Route>
              <Route path='/employee/:id/mbooks' element={<ListBooksEmp />}></Route>
              <Route path='/employee/:id/edit-book/:id' element={<UpdateBook />}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/admin' element={<Admin/>}></Route>
              <Route path = "/add-employee" element={<AddEmployeeComponent/>} ></Route>
              <Route path = "/edit-employee/:id" element={<AddEmployeeComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
