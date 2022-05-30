import React from 'react'
import { Card,Col} from 'react-bootstrap'

function Placement({dt}) {
  return (
      <Col  xl="3" lg="3" md = "3" sm ="12" xs="12" style={{marginBottom:"2%"}}>
    <Card style={{ width: "16rem",height:"450px" }}>
  <Card.Img variant="top" src={dt.studentImage} style={{height:"250px"}}/>
  <Card.Body>
    <Card.Title><h4>{dt.studentName}</h4></Card.Title>
    <Card.Text>
      <h5>{dt.company}</h5>
      <h6>Profile: {dt.profile}</h6>
      <div>Package: {dt.package}</div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
  )
}

export default Placement