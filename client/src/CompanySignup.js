import React,{useState} from 'react'
import { Alert,Col, Row,Form,Button, Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import pic from './Images/signup.png'
import axios from 'axios'

function CompanySignup() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [company,setCompany] = useState("");
  const [cnfpass,setconfPass] = useState("");
  const [msg,setMsg] = useState("");
  const [style,setStyle] = useState("danger");
  const config = {
    email: email,
    password: pass,
    companyName: company,
    confirmpassword:cnfpass,
  }
  const navigate = useNavigate();
  const handleClick = (e)=>{
    e.preventDefault() ;
    if(email ==="" || pass ==="" || company ==="" || cnfpass ==="")
    {
      setMsg("ALL FIELDS REQUIRED");
      return;
    }
    axios.post("http://localhost:5000/company/signup",config).then(
      (resp)=>{
        if(resp.status === 210)
        {
          setMsg(resp.data.msg);
        }
        else if(resp.status === 201)
        {
        setMsg("Successfully Registered");
        setStyle("success");
        setTimeout(()=>{navigate("/setcompany")},2000);
        localStorage.setItem('accessToken',resp.data.accessToken)
        }
      }
    ).catch((err)=>{setMsg(err.response.data.message);console.error(err);})
  }



  return (
    <div>
        <Row style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{color:"white",backgroundColor:"black",fontSize:"160%",fontWeight:"bold",fontFamily:"sans-serif"}}>Virtual Placement Cell</div>
    </Row>
    <Container>
    <Row style={{margin:"7% 1%",display:"flex"}} >
        <Col  xs={10} md={10} lg = {7}>
        <div style={{marginBottom:"25px",fontSize:"360%",fontWeight:"bolder",fontFamily:"sans-serif"}}>Sign Up</div>
        <span style={{fontSize:"90%",fontFamily:"sans-serif"}}>Already have an account?<Link to = "/companylogin"> Try Logging In.</Link></span>
        <Form style={{marginTop:"5%"}}>
            <input onChange ={(e)=>{setCompany(e.target.value);}} required  placeholder='Company Name' style={{paddingLeft:"2%",marginBottom:"2%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input onChange ={(e)=>{setEmail(e.target.value);}} required placeholder='Email' style={{paddingLeft:"2%",marginBottom:"2%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input type = 'password' onChange ={(e)=>{setPass(e.target.value);}} required  placeholder='Password' style={{paddingLeft:"2%",marginBottom:"2%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px"}}/>
            <input type = 'password' onChange ={(e)=>{setconfPass(e.target.value);}} required  placeholder='Confirm Password' style={{paddingLeft:"2%",marginBottom:"2%",border:"none",filter:" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",width:"100%",height:"45px",borderRadius:"8px",marginRight:"100%"}}/>
            <div>
            {msg&&
            <Alert variant={style} onClose={() => setMsg("")} dismissible>
        {msg}
      </Alert>}
              <input required type="checkbox"/><span style={{marginRight:"2%"}}> I have read and confirmed the Terms of Agreement.. </span>
            <Button onClick = {handleClick} style={{padding:"8px 40px",borderRadius:"25px",color:"white",backgroundColor:"black",fontSize:"110%",fontWeight:"bold",fontFamily:"sans-serif"}}>Sign Up</Button></div>
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

export default CompanySignup