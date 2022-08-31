import React from 'react'
import { useState ,useEffect} from 'react'
import { Row ,Col} from 'react-bootstrap'
import ResturantCard from './ResturantCard'

function Home() {
  const[ items, setItems]=useState([])
  const fetchdata =async()=>{
    await fetch('./restaurants.json')
    .then((res)=>res.json())
    .then((data)=>setItems(data.restaurants))
  }
  useEffect(() => {
    fetchdata()
  }, [])
  
  
  return (

    <Row>
    {
      items.map((item)=>(
        <Col sm={12} md={8} lg={4} xl={3}>
        <ResturantCard data={item}/>
        </Col>
      ))
      
      }
    </Row>
  )
}

export default Home