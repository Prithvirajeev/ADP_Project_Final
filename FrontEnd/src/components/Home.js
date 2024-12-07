import React from 'react'
import Card from './Card'

export default function Home() {
  return (
    <>
    <div className="d-xl-flex p-xl-5">
    <div className="card m-5" style={{width:"250px"}}>
    <Card name='Register' loink='register' val='Register' link='https://img.freepik.com/premium-vector/employee-engagement-concept-illustration-key-motivated-workforce_1263357-35578.jpg?semt=ais_hybrid'/>
    </div>
    <div className="card m-5" style={{width:"250px"}}>
    <Card name='Login' val='Login' loink='login' link='https://static.vecteezy.com/system/resources/previews/021/340/782/non_2x/customer-icon-for-your-website-design-logo-app-ui-free-vector.jpg'/>
    </div>
    </div>
    </>
  )
}
