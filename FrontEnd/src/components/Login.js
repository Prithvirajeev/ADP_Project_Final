import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/Employee/EmployeeService';
import CustomerService from '../services/Customer/CustomerService';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [details, setDetails] = useState([]);
  const nav = useNavigate();

  // useEffect(() => {
  //   getDetails();
  // },[])

  function getDetailsEmp(username){
    EmployeeService.getUserName(username).then((res) => {
      
      setDetails(res.data);
    }).catch((e) => console.log(e));
  }
  function getDetailsCus(username){
    CustomerService.getCustomerName(username).then((res) => {
      
      setDetails(res.data);
    }).catch((e) => console.log(e));
  }
  function val(e){
    e.preventDefault();
    if(username === 'admin' && password === '123'){
      alert('Login Successfull');
      nav('/admin');
    }
    else if(username[0].toLocaleLowerCase() === "c"){
      getDetailsCus(username)
      console.log(details);
      if(details.id !== undefined)
        nav('/customer/'+details.id)
    }
    else if(username[0].toLocaleLowerCase() === "e"){
      getDetailsEmp(username)
      console.log(details);
      if(details.id !== undefined)
        nav('/employee/'+details.id)
    }
    else{
      alert('Invalid Credentials')
    }
  }
  return (
    <div>
        <form className='m-5'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) => {val(e);}}>Submit</button>
        </form>
    </div>
  )
}
