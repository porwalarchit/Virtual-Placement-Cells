import React, { useEffect, useState } from 'react'
import { Alert,Container,Row,Col,Form,Button } from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function MyCompanyDashboard() {
const [data,setData] = useState("");
const [msg,setMsg] = useState("");
const navigate = useNavigate();
const config = {
  headers:{
    authorization:localStorage.getItem('jwtToken'),
  }
}
useEffect(()=>{
  axios.get("http://localhost:5000/company/profile",config).then((resp)=>{
   setData(resp.data.user);
    }).catch((err)=>{
      setMsg("Some Error Occured");
    })
},[]);
const gosearch = ()=>{
  navigate('/cmpnysearch');
}

  return (
    <React.Fragment>
        <Container fluid>
          <Row>
          <CompanyProfile  val = '1'/>
          <Col xl="10" lg="10" md ="9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
          <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search College" className='inp'/>
          <Button onClick={gosearch}  style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
                <Row>
                {msg&&
            <Alert variant="danger" style={{marginBottom:"3%"}} onClose={() => setMsg("")} dismissible>
        {msg}
      </Alert>}
                  <Col className='Heading'>
                  Welcome {data.companyName}
                  </Col>
                </Row>
                <Row style={{display:"flex",justifyContent:"center"}}>
                <img src = {data.profileImg} style={{width:"200px",borderRadius:"50px",marginBottom:"4%"}}/>
                </Row>
                <Row style={{display:"flex",justifyContent:"center"}}>
                    {/* <div className='title'>About</div> */}
                    <div className='BODY'>
                    {data.description}</div>
                </Row>
                <div style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
                <div style={{padding:"0.5%",fontWeight:"bold",width:"330px",textAlign:"center",border:"dashed rgb(154, 145, 83)",borderRadius:"15px"}}>
                    <span>
                    <span style={{fontSize:"120%",fontWeight:"bold"}}>Email:</span>
                    <span style={{marginLeft:"1%",fontSize:"100%",wordBreak:"break-all",color:"crimson",fontWeight:"normal"}}>
                      {data.email}
                    </span>
                    </span>
                  
                  <div>
                    <span style={{fontSize:"120%",fontWeight:"bold"}}>Visit:</span>
                    <a href={data.website} target ='_blank'><span style={{marginLeft:"1%",wordBreak:"break-all",fontSize:"100%",color:"blueviolet",fontWeight:"normal"}}>
                    {data.website}
                    </span></a>
                    </div>
                    </div>
                    </div>
            </Col>
            </Row>
        </Container>
        </React.Fragment>
  )
}

export default MyCompanyDashboard