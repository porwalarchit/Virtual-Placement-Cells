import React from 'react'
import { Card,Col} from 'react-bootstrap'

function Clg({dt}) {
    return (
        <Col  xl="4" lg="4" md = "4" sm ="12" xs="12" style={{marginBottom:"2%"}}>
      <Card style={{ width: "20rem",height:"100%",border:"solid cadetblue"}}>
    <Card.Img variant="top" src={dt.profileImg} style={{height:"250px",padding:"3%"}}/>
    <Card.Body>
      <Card.Title><h5>{dt.collegeName}</h5></Card.Title>
      <Card.Text>
        <div>{dt.description}</div>
        <h6>Website:<a href={dt.website}>{dt.website}</a> </h6>
        <h6>Email: {dt.email}</h6>
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
    )
}

export default Clg