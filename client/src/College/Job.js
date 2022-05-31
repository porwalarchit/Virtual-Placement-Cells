import React from 'react'
import { Row,Col } from 'react-bootstrap'
import pic from '../Images/Ellipse 3.png'

function Job() {
  return (
    <Row style={{backgroundColor:"rgba(217, 217, 217, 0.5)",margin:"2% 1%",borderRadius:"15px",padding:"1%"}}>
    <Col lg={2} sm= {12} md = {2} xs={12} xl={2} >
        <img src={pic} style={{width:"80px"}}/>
        </Col>
        <Col lg={7} sm= {7} md = {7} xs={7} xl={7}>
        <Row style={{fontSize:"150%",fontWeight:"bold"}}>
            Jaypee Company
        </Row>
        <Row style={{fontSize:"110%",fontWeight:"bold"}}>
            Role
        </Row>
        <Row style={{fontSize:"90%",fontWeight:"bold"}}>
            Description
        </Row>
        <Row style={{fontSize:"70%"}}>
            LAst Date
        </Row>
        </Col>
        <Col >
        <Row style={{fontSize:"100%",fontWeight:"bold"}}>
            Job Type
        </Row>
        <Row style={{fontSize:"80%"}}>
            Duration
        </Row>
        <Row style={{fontSize:"130%",fontWeight:"bold"}}>
            money
        </Row>
        </Col>
    </Row>
  )
}

export default Job