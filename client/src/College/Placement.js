import React from 'react'
import { Card,Col} from 'react-bootstrap'

function Placement({dt}) {
  return (
      <Col  xl="3" lg="3" md = "3" sm ="12" xs="12" style={{marginBottom:"2%"}}>
    <Card style={{ width: "16rem",height:"100%",border:"solid cadetblue"}}>
  <Card.Img variant="top" src={dt.studentImage} style={{height:"250px",padding:"3%"}}/>
  <Card.Body>
    <Card.Title><h5>{dt.studentName}</h5></Card.Title>
    <Card.Text>
      <h5>{dt.company}</h5>
      {dt.profile === "" && 
      <h6>{dt.profile}</h6>}
       {dt.profile !== "" && 
      <h6>Profile: {dt.profile}</h6>}

      {dt.package === "" && 
      <h6>{dt.package}</h6>}
       {dt.package !== "" && 
      <h6>Package: {dt.package}</h6>}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
  )
}

export default Placement