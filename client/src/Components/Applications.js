import React, { useState,useEffect } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import Application from './Application'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Applications() {
  const [data,setData] = useState([]);
const [msg,setMsg] = useState("");
const [updated,setUpdated] = useState(false) ;  
const config = {
  headers:{
    authorization:localStorage.getItem('jwtToken'),
  }
}
const navigate = useNavigate();
function getApplied(){
  console.log(config)
  axios.get("http://localhost:5000/company/viewAppliedCollege",config).then((resp)=>{

    setData(resp.data.user);
    if(data.length===0)
    setMsg("No Applications currently");
    }).catch((err)=>{
      setMsg(err.response.data.message);
      console.error(err)
    })
}

useEffect(()=>{
  getApplied() 
},[updated]);
const gosearch = ()=>{
  navigate('/cmpnysearch');
}

  return (
    <React.Fragment>
    <Container fluid>
    <Row>
    <CompanyProfile val = '5'/>
    <Col xl="10" lg="10" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
        <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search College" className='inp'/>
          <Button onClick={gosearch} style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
          <Row>
            <Col className='Heading'>
              Current Applications
            </Col>
          </Row>
                  { 
                   data.filter(function (dt) {
                    return dt.status === "Pending";
                }).map((d)=>(
                      <Application setUpdated={setUpdated} key = {d._id} dt = {d}></Application>
                   ))
                  }
      </Col>
      </Row>
  </Container>
  </React.Fragment>
  )
}

export default Applications