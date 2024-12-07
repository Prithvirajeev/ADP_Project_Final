import React, { useEffect, useState } from 'react'
import BooksService from '../../services/Books/BooksService';
import { Link, useParams } from 'react-router-dom';

export default function ListBooksEmp() {
 
    const [books, setBooks] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getBooks();
    },[])
    const getBooks = () => {
        BooksService.getAllBooks().then((res) => {
            setBooks(res.data);
        }).catch((e) => console.log(e));
    }
    const revoke = (id) => {
        BooksService.up(id).then((res) => {
            console.log(res.data);
            getBooks();
        }).catch((e) => console.log(e));
    }
    const deleteBook = (id) => {
        BooksService.deleteBook(id).then((res) => {
            console.log(res.data);
            getBooks();
        }).catch((e) => console.log(e));
    }
  return (
    <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Book Id </th>
                        <th> Book Name </th>
                        <th> Book Title </th>
                        <th> Book EmpId </th>
                        <th> Book CustId </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(
                            book =>
                            <tr key = {book.id}> 
                                <td> {book.id} </td>
                                <td> {book.name} </td>
                                <td>{book.title}</td>
                                <td>{book.empid}</td>
                                <td>{book.custid}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/employee/${id}/edit-book/${book.id}`}>Update</Link>
                                    <button className = "btn btn-danger" style = {{marginLeft:"10px"}} onClick={()=>{revoke(book.id)}}> Revoke</button>
                                    {/* <button className = "btn btn-info" style = {{marginLeft:"10px"}} onClick={()=>{}}> Update</button> */}
                                    <button className = "btn btn-danger" style = {{marginLeft:"10px"}} onClick={()=>{deleteBook(book.id)}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}
