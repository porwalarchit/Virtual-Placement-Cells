import React from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import pic from '../Images/Ellipse 3.png'

function College() {
  return (
    <Row style={{backgroundColor:" rgba(217, 217, 217, 0.5)",margin:"2%",padding:"2%",borderRadius:"20px"}}>
        <Col lg={2} sm= {12} md = {2} xs={12} xl={2}>
        <img src={pic} style={{width:"80px"}}/>
        </Col>
        <Col lg={7} sm= {7} md = {7} xs={7} xl={7}  style={{fontSize:"150%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"}}>
        Jaypee University of Engineering and Technology
        </Col>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
        <div><Button className="px-5 py-2" style={{fontSize:"120%",backgroundColor:"cadetblue",borderRadius:"15px"}}>View</Button></div>
        </Col>
    </Row>
  )
}

export default College