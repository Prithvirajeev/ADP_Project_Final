import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BooksService from '../../services/Books/BooksService';

export default function UpdateBook() {
    const {id} = useParams();
    const [oldData, setOldData] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        getDetail();
    },[])
    const getDetail = () => {
        BooksService.getBooksById(id).then((res) => {
            setOldData(res.data);
            setName(res.data.name);
            setTitle(res.data.title);
            // console.log(res.data);
        }).catch((e) => console.log(e));
    }
    const validateBook = (e) => {
        e.preventDefault();
        const empid = oldData['empid'];
        const custid = oldData['custid'];

        if(name === "" || title === ""){
            alert("Fill all the fields")
        } else{
            const book = {name,title,empid,custid};
            console.log(book)
            if(empid !== null)
            BooksService.updateBooks(id,book).then((res) => {
                // console.log(res.data);
                getDetail();
                // nav('/')
                
            }).catch((e) => console.log(e)); 
        }
    }
  return ( 
    <div className='d-xl-flex'>
        <div className='p-xl-5'>
          <div className='text-center'>
            Update the Book
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
