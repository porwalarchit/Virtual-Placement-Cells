import React from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import pic from './Images/home.png'

function Home() {
  return (
        <Container fluid>
    <Row style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{color:"white",backgroundColor:"black",fontSize:"160%",fontWeight:"bold",fontFamily:"sans-serif"}}>Virtual Placement Cell</div>
    </Row>
    <Row style={{marginTop:"4%",fontSize:"300%",fontWeight:"bolder",fontFamily:"sans-serif"}}>
        <div style={{display:"flex",justifyContent:"center"}}><span >On Campus Hiring Made </span>
        <span style={{color:"white",textShadow: "1.5px 1.5px 3.5px black"}}> Easy</span></div>
    </Row>
    <Row style={{display:"flex",justifyContent:"center"}}><img src = {pic} style={{width:"270px"}}/></Row>
    <Row style={{display:"flex",justifyContent:"center",fontSize:"115%",fontWeight:"bolder",fontFamily:"sans-serif"}}>
        Continue As
    </Row>
    <Row style={{display:"flex",marginTop:"2%",marginBottom:"6%"}}>
    <Col style={{display:"flex",justifyContent:"end"}}>
<Link to = "/companylogin"><Button style={{fontSize:"150%",color:"black",backgroundColor:"white",fontWeight:"bold",fontFamily:"sans-serif",borderRadius:"17px",width:"115%"}}>Company</Button></Link>
</Col>
<Col style={{display:"flex",justifyContent:"start"}}>
<Link to = "/institutelogin"><Button style={{fontSize:"150%",color:"white",backgroundColor:"black",fontWeight:"bold",fontFamily:"sans-serif",borderRadius:"17px",width:"115%"}}>Institute</Button></Link>
</Col>
    </Row>
    </Container>
  )
}

export default Home