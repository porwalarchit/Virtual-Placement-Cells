import React from 'react'
import { Col, Row,Form,Button, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pic from './Images/signup.png'

function InstituteSignUp() {
  return (
    <div>
        <Row style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{color:"white",backgroundColor:"black",fontSize:"160%",fontWeight:"bold",fontFamily:"sans-serif"}}>Virtual Placement Cell</div>
    </Row>
    <Container>
    <Row style={{margin:"7% 1%",display:"flex"}} >
        <Col  xs={10} md={10} lg = {7}>
        <div style={{marginBottom:"25px",fontSize:"360%",fontWeight:"bolder",fontFamily:"sans-serif"}}>Sign Up</div>
        <span style={{fontSize:"90%",fontFamily:"sans-serif"}}>Already have an account?<Link to = "/institutelogin"> Try Logging In.</Link></span>
        <Form style={{marginTop:"5%",marginBottom:"2%"}}>
            <input required placeholder='College Name' style={{paddingLeft:"2%",marginBottom:"3%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input required placeholder='Email' style={{paddingLeft:"2%",marginBottom:"3%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input required placeholder='Password' style={{paddingLeft:"2%",marginBottom:"3%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input required placeholder='Confirm Password' style={{paddingLeft:"2%",marginBottom:"7%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px",marginRight:"100%"}}/>
            <div><input type="checkbox" required/><span style={{marginRight:"2%"}}> I have read and confirmed the Terms of Agreement.. </span>
            <Link to='/setcollege'><Button style={{padding:"8px 40px",borderRadius:"25px",color:"white",backgroundColor:"black",fontSize:"110%",fontWeight:"bold",fontFamily:"sans-serif"}}>Sign Up</Button></Link></div>
        </Form>
        </Col>
        <Col xs={10} md={10}  xl = {5} style={{display:"flex",justifyContent:"center"}}>
        <img src = {pic} style={{width:"100%",height:"450px"}}/>
        </Col>
    </Row>
    </Container>
    </div>
  )
}

export default InstituteSignUp