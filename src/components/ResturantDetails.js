
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import Ratings from './Ratings'


function ResturantDetails() {
  const [data, setData] = useState([])
  const params = useParams([])

  const fetchData = async () => {
    await fetch('/restaurants.json')
      .then((res) => res.json())
      .then((data) => setData(data.restaurants))
  }
  useEffect(() => {
    fetchData()
  }, [])

  const details = data.find((i) => i.id == params.id)

  return (
    <div>
      {
        details ? (
          <Row className='my-3'>
            <Col md={3}>
              <Image className='img' src={details.photograph} fluid />
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h2>{details.name}</h2>
                  <p>{details.neighborhood}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p> cuisine :{details.Cuisine_type}</p>
                </ListGroup.Item>
                <ListGroup.Item>Address:{details.address}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h4>operating hours</h4>
                  <p>Monday:{details.operating_hours.Monday}</p>
                  <p>Tuesday:{details.operating_hours.Tuesday}</p>
                  <p>Wednesday:{details.operating_hours.Wednesday}</p>
                  <p>Thursday:{details.operating_hours.Thursday}</p>
                  <p>Friday:{details.operating_hours.Friday}</p>
                  <p>Saturday:{details.operating_hours.Saturday}</p>
                  <p>Sunday:{details.operating_hours.Sunday}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Row>
              <Card className='my-3 mx-3 p-2 rounded card'>
                <Ratings data={details.reviews} />
              </Card>
            </Row>
          </Row>
        ) : 'null'
      }

    </div>
  )

}

export default ResturantDetails