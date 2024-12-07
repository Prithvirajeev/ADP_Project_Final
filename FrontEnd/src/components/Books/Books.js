import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BooksService from '../../services/Books/BooksService';

export default function Books() {
    const [name,setName] = useState('');
    const [title, setTitle] = useState('');
    const [empid, setEmpid] = useState('');
    const [custid, setCustid] = useState('');
    const {id} = useParams();
    const nav = useNavigate();


    function validateBook(e){
        setEmpid(id);
        e.preventDefault();

        if(name === "" || title === ""){
            alert("Fill all the fields")
        } else{
            const book = {name,title,empid,custid};
            console.log(book)
            if(empid !== null)
            BooksService.createBooks(book).then((res) => {
                console.log(res.data);
                nav('/')
                
            }).catch((e) => console.log(e)); 
        }
    }


  return (
    <div className='d-xl-flex'>
        <div className='p-xl-5'>
          <div className='text-center'>
            Register a Book
          </div>
            <form className='m-5'>
              <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail3" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => {validateBook(e)}}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={(e) => {nav('/')}}>Cancel</button>
            </form>
        </div>
        </div>
  )
}
