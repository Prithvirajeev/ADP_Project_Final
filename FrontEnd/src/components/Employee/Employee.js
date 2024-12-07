import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card'

export default function Employee(props) {

    const {id} = useParams();
  return (
    <div className='card d-xl-flex p-xl-5 m-5' style={{width:"250px"}}>
        <Card name="Create Books" loink={id+"/Books"} val="Create Books" link="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"></Card>
        <Card name="Manage Books" loink={id+"/mBooks"} val="Manage Books" link="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"></Card>
    </div>
  )
}
