import React from 'react'

export default function Card(props) {
  return (
    <>
      <img className="card-img-top" src={props.link} alt="Card image" style={{width:"100%"}}/>
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <a href={props.loink.toLowerCase()} className="btn btn-primary">{props.val}</a>
      </div>
      </>
  )
}
