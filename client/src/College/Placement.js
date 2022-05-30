import React from 'react'
import { Card,Col} from 'react-bootstrap'

function Placement() {
  return (
      <Col  xl="3" lg="3" md = "3" sm ="12" xs="12" style={{marginBottom:"2%"}}>
    <Card style={{ width: '17rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title><h4>Student Nm</h4></Card.Title>
    <Card.Text>
      <h5>Company</h5>
      <h6>Profile:</h6>
      <div>Package: 1000000</div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
  )
}

export default Placement