import React, { useEffect, useState } from 'react'
import Card from '../Card'

export default function Customer() {

  const [customers,setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers();
  },[])
  function getAllCustomers(){

  }

  return (
    <div className='card d-xl-flex p-xl-5 m-5' style={{width:"250px"}}>
        <Card name="Books" val="Books" link="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"></Card>
    </div>
  )
}
