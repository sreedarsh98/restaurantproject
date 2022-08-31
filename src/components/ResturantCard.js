import React from 'react'
import { Card, } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ResturantCard({data}) {
  
  return (
    <>
    <Link to={`resturant/${data.id}`}>
    <Card >
      <Card.Img src={data.photograph} className="p-3" variant='top'/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         <p>{data.neighborhood}</p>
        </Card.Text>
        
      </Card.Body>
      
    </Card>
    </Link>
    </>
  )
}

export default ResturantCard