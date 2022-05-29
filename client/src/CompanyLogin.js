import React, { useState } from 'react'
import { Alert,Col, Row,Form,Button, Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import pic from './Images/login.png'
import axios from 'axios'

function CompanyLogin() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [msg,setMsg] = useState("");
  const [style,setStyle] = useState("danger");
  const config = {
    email: email,
    password: pass,
  }

  const navigate = useNavigate();
  const handleClick = (e)=>{
    e.preventDefault() ;
    if(email ==="" || pass ==="" )
    {
      setMsg("ALL FIELDS REQUIRED");
      return;
    }
    axios.post("http://localhost:5000/company/login",config).then((resp)=>{
      if(resp.status === 210)
        {
          setMsg(resp.data.msg);
        }
       else if(resp.status === 201){
         localStorage.setItem('jwtToken',resp.data.accessToken);
      setMsg(resp.data.message);
      setStyle("success");
      setTimeout(()=>{navigate("/mycompanydashboard")},3000);}
    }).catch((err)=>{
      setMsg(err.response.data.message);
    });
  }
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
            <input onChange ={(e)=>{setEmail(e.target.value);}} required placeholder='Email' style={{paddingLeft:"2%",marginBottom:"5%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input type = "password" onChange ={(e)=>{setPass(e.target.value);}} required placeholder='Password' style={{paddingLeft:"2%",marginBottom:"5%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            {msg&&
            <Alert variant={style} style={{marginBottom:"3%"}} onClose={() => setMsg("")} dismissible>
        {msg}
      </Alert>}
         <Button onClick={handleClick} style={{padding:"8px 40px",borderRadius:"25px",color:"white",backgroundColor:"black",fontSize:"110%",fontWeight:"bold",fontFamily:"sans-serif"}}>Login</Button> 
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