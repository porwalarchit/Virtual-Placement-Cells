import React, { useState } from 'react'
import { Col, Row,Form,Button, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pic from './Images/login.png'

function CompanyLogin() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const config = {
    Email: email,
    Password: pass,
  }

  // const handleClick = (e)=>{
  //   e.preventDefault() ;
  //   const response = axios.post("http://localhost:3000/college/login",config).then(async)
  // }
  return (
    <div>
        <Row style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{color:"white",backgroundColor:"black",fontSize:"160%",fontWeight:"bold",fontFamily:"sans-serif"}}>Virtual Placement Cell</div>
    </Row>
    <Container>
    <Row style={{margin:"10% 1%",display:"flex"}} >
        <Col  xs={10} sm={10} md={6}>
        <div style={{marginBottom:"25px",fontSize:"360%",fontWeight:"bolder",fontFamily:"sans-serif"}}>Login</div>
        <span style={{fontSize:"90%",fontFamily:"sans-serif"}}>New User?<Link to = "/companysignup"> Try Signing In.</Link></span>
        <Form style={{marginTop:"5%",marginBottom:"2%"}}>
            <input onChange ={(e)=>{setEmail(e.target.value);}} required placeholder='Email' style={{paddingLeft:"2%",marginBottom:"10%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input onChange ={(e)=>{setPass(e.target.value);}} required placeholder='Password' style={{paddingLeft:"2%",marginBottom:"10%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
         <Link to="/mycompanydashboard"><Button style={{padding:"8px 40px",borderRadius:"25px",color:"white",backgroundColor:"black",fontSize:"110%",fontWeight:"bold",fontFamily:"sans-serif"}}>Login</Button></Link>   
        </Form>
        </Col>
        <Col xs={10} md={10}  xl = {6}  style={{display:"flex",justifyContent:"center"}}>
        <img src = {pic} style={{width:"450px",height:"70%"}}/>
        </Col>
    </Row>
    </Container>
    </div>
  )
}

export default CompanyLogin