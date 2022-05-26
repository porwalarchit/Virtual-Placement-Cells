import React from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import pic from '../Images/Ellipse 3.png'

function Application() {
  return (
    <Row style={{backgroundColor:" rgba(217, 217, 217, 0.7)",margin:"2%",padding:"2%",borderRadius:"20px"}}>
        <Col lg={2} sm= {12} md = {2} xs={12} xl={2}>
        <img src={pic} style={{width:"50px"}}/>
        </Col>
        <Col lg={4} sm= {12} md = {4} xs={12} xl={4}  style={{fontSize:"130%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"}}>
        Jaypee University of Engineering and Technology
        </Col>
        <Col lg={3} sm= {5} md = {3} xs={5} xl={3} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div><Button className="px-3 py-1" style={{fontSize:"100%",backgroundColor:"rgba(9,8,20,22)",borderRadius:"15px"}}>View College</Button></div>
        </Col>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
        <div style={{marginRight:"2%"}}><Button className="px-3 py-1" style={{fontSize:"100%",backgroundColor:"green",borderRadius:"15px"}}>Accept</Button></div>
        <div><Button className="px-3 py-1" style={{fontSize:"100%",backgroundColor:"red",borderRadius:"15px"}}>Reject</Button></div>
        </Col>
    </Row>
  )
}

export default Application