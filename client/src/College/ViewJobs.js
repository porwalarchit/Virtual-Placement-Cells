import React, { useState,useEffect } from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
import CollegeProfile from './CollegeProfile'
import '../Components/CompanyProfile.css'
import Job from './Job'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ViewJobs() {
  const [data,setData] = useState([]);
  const nav = useNavigate();
  const [msg,setMsg] = useState("");
  const config = {
    headers:{
      authorization:localStorage.getItem('jwtToken'),
    }
  }
  useEffect(()=>{
    axios.get("http://localhost:5000/college/getAllCompanyJobs",config).then((resp)=>{
      console.log(resp)
      setData(resp.data);
      }).catch((err)=>{
        setMsg(err.response.data.message);
        console.error(err)
      })
  },[]);
  const gosearch = ()=>{
    nav('/clgsearch');
  }
  
  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CollegeProfile val = '4'/>
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
                    View Jobs
                  </Col>
                </Row>
                <h1 style={{color:"red",fontSize:"150%",textAlign:"center"}}>{msg}</h1>

{ 
 data.map((d)=>(
    <Job key = {d._id} dt = {d}></Job>
 ))
}
            </Col>
            </Row>
        </Container>
        </React.Fragment>
  )
}

export default ViewJobs