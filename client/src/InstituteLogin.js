import React from 'react'
import { Col, Row,Form,Button, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pic from './Images/login.png'

function InstituteLogin() {
  return (
    <div>
        <Row style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{color:"white",backgroundColor:"black",fontSize:"160%",fontWeight:"bold",fontFamily:"sans-serif"}}>Virtual Placement Cell</div>
    </Row>
    <Container>
    <Row style={{margin:"10% 8%",display:"flex"}} >
        <Col  xs={10} md={10} >
        <div style={{marginBottom:"25px",fontSize:"360%",fontWeight:"bolder",fontFamily:"sans-serif"}}>Login</div>
        <span style={{fontSize:"90%",fontFamily:"sans-serif"}}>New User?<Link to = "/institutesignup"> Try Signing In.</Link></span>
        <Form style={{marginTop:"5%"}}>
            <input placeholder='Email' style={{paddingLeft:"2%",marginBottom:"10%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input placeholder='Password' style={{paddingLeft:"2%",marginBottom:"10%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <Button style={{padding:"8px 40px",borderRadius:"25px",color:"white",backgroundColor:"black",fontSize:"110%",fontWeight:"bold",fontFamily:"sans-serif"}}>Login</Button>
        </Form>
        </Col>
        <Col xl = {6} style={{display:"flex",justifyContent:"end"}}>
        <img src = {pic} style={{width:"80%"}}/>
        </Col>
    </Row>
    </Container>
    </div>
  )
}

export default InstituteLogin