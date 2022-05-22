import React from 'react'
import {Button, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import pic from './Images/home.png'

function Home() {
  return (
        <Container>
    <Row style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{color:"white",backgroundColor:"black",fontSize:"160%",fontWeight:"bold",fontFamily:"sans-serif"}}>Virtual Placement Cell</div>
    </Row>
    <Row style={{marginLeft:"26%",marginTop:"4%",fontSize:"300%",fontWeight:"bolder",fontFamily:"sans-serif"}}>
        <span >On Campus Hiring Made </span>
        <span style={{color:"white",textShadow: "1.5px 1.5px 3.5px black"}}>Easy</span>
    </Row>
    <Row style={{display:"flex",justifyContent:"center"}}><img src = {pic} style={{height:"400px"}}/></Row>
    <Row style={{marginLeft: "45%",fontSize:"115%",fontWeight:"bolder",fontFamily:"sans-serif"}}>
        <span >Continue As </span>
    </Row>
    <Row style={{display:"flex",justifyContent:"center",marginTop:"2%"}}>
<Link to = "/companylogin"><Button style={{marginTop:"10px",marginRight:"15px",padding:"10px 50px",borderRadius:"17px",color:"white",backgroundColor:"black",fontSize:"110%",fontWeight:"bold",fontFamily:"sans-serif"}}>Company</Button></Link>
<Link to = "/institutelogin"><Button  style={{marginTop:"10px",padding:"10px 57px",borderRadius:"17px",color:"black",backgroundColor:"white",fontSize:"110%",fontWeight:"bold",fontFamily:"sans-serif"}}>Institute</Button></Link>
    </Row>
    </Container>
  )
}

export default Home