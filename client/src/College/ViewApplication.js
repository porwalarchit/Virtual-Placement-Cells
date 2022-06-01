import React, { useState,useEffect } from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
import CollegeProfile from './CollegeProfile'
import '../Components/CompanyProfile.css'
import axios from 'axios'
import Applicationclg from './Applicationclg'
import { useNavigate } from 'react-router-dom'


function ViewApplication() {
  const [data1,setData1] = useState([]);
  const [data,setData] = useState([]);
const [msg,setMsg] = useState("");
const [updated,setUpdated] = useState(false) ;  
const nav = useNavigate();
const config = {
  headers:{
    authorization:localStorage.getItem('jwtToken'),
  }
}

function getApplied(){
  console.log(config)
  axios.get("http://localhost:5000/college/appliedJobs",config).then((resp)=>{
    console.log(resp)
  setData(resp.data.clg);
  setData1(resp.data.user);
    }).catch((err)=>{
      setMsg(err.response.data.message);
      console.error(err)
    })
}

useEffect(()=>{
  getApplied() 
},[updated]);
const gosearch = ()=>{
  nav('/clgsearch');
}



  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CollegeProfile val = '5'/>
          <Col xl="10" lg="10" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
          <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search Company" className='inp'/>
          <Button onClick={gosearch} style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
                <Row>
                  <Col className='Heading'>
                    Your Applications
                  </Col>
                </Row>
                <Row>
                  { 
                   data.map((d)=>(
                      <Applicationclg setUpdated={setUpdated} key = {d._id} dt = {d}></Applicationclg>
                   ))
                  }
                  { 
                   data1.map((d)=>(
                      <Applicationclg setUpdated={setUpdated} key = {d._id} dt = {d}></Applicationclg>
                   ))
                  }
                </Row>
            </Col>
            </Row>
            
        </Container>
        </React.Fragment>
  )
}

export default ViewApplication