import React, { useState } from 'react'
import {Alert,Container,Row,Col,Form,Button, FloatingLabel} from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import pic from '../Images/login.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function PostJobs() {
  const [data,setData] = useState("");
  const [msg,setMsg] = useState("");
  const [jn,setJn] = useState("");
  const [cn,setCn] = useState("");
  const [des,setDes] = useState("");
  const [req,setReq] = useState("");
  const [dur,setDur] = useState("");
  const [date,setDate] = useState("");
  const [type,setType] = useState("");
  const [stipe,setStipe] = useState("");
  const [style,setStyle] = useState("danger");
  const navigate = useNavigate();
  const config={
                companyName: cn,
                jobName: jn,
                jobDescription: des,
                jobRequirements: req,
                jobType:type,
                duration: dur,
                jobPerks: stipe,
                deadline: date
  }

  const con = {
    headers:{
      authorization:localStorage.getItem('jwtToken'),
    }
  }

  const handleClick = (e)=>{
   e.preventDefault();
    axios.post("http://localhost:5000/company/addJob",config,con).then((resp)=>{
      setStyle("success");
      setMsg(resp.data.message);
      setTimeout(()=>{navigate("/mycompanydashboard")},2000);
      }).catch((err)=>{
        setMsg("Some Error Occured");
      })
 }
 const gosearch = ()=>{
  navigate('/cmpnysearch');
}

  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CompanyProfile  val = '4'/>
          <Col xl="10" lg="10" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
          <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search College" className='inp'/>
          <Button  onClick={gosearch} style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
                <Row>
                  <Col className='Heading'>
                    Create Hiring
                  </Col>
                </Row>
                <Row>
                  <Col>
                 <Form>
                 <FloatingLabel label="Job Name" className="mb-3">
                   <Form.Control onChange={(e)=>{setJn(e.target.value)}} required type="text" placeholder="Job Name" />
                   </FloatingLabel>
                   <FloatingLabel label="Company Name" className="mb-3">
                   <Form.Control onChange={(e)=>{setCn(e.target.value)}} required type="text" placeholder="Company Name" />
                   </FloatingLabel>
                   <FloatingLabel label="Job Description (not more than 6000 words)" className="mb-3">
                   <Form.Control onChange={(e)=>{setDes(e.target.value)}} required as="textarea" style={{height:"200px"}} maxLength="6000" placeholder="description about company"/>
                   </FloatingLabel>
                 <FloatingLabel label="Requirements" className="mb-3">
                   <Form.Control onChange={(e)=>{setReq(e.target.value)}} required type="text" placeholder="website" />
                   </FloatingLabel>
                   <FloatingLabel label="Duration" className="mb-3">
                   <Form.Control onChange={(e)=>{setDur(e.target.value)}} required type="text" placeholder="Duration" />
                   </FloatingLabel>
                   <FloatingLabel label="Job type" className="mb-3">
                   <Form.Select  onChange={(e)=>{setType(e.target.value)}} required >
                     <option>Full-Time</option>
                     <option value="Internship">Internship</option>
                     <option value="Contract">Contract</option>
                     <option value="Associate">Associate</option>
                     </Form.Select>
                   </FloatingLabel>
                   <FloatingLabel label="Stipend" className="mb-3">
                   <Form.Control onChange={(e)=>{setStipe(e.target.value)}} required type="number" placeholder="website" />
                   </FloatingLabel>
                   <FloatingLabel label="Deadline" className="mb-3">
                   <Form.Control onChange={(e)=>{setDate(e.target.value)}} required type="date" placeholder="website" />
                   </FloatingLabel>
                   {msg&&
            <Alert variant={style} style={{marginBottom:"3%"}} onClose={() => setMsg("")} dismissible>
        {msg}
      </Alert>}
    <Button onClick = {handleClick} style={{backgroundColor:"cadetblue",fontSize:"100%",padding:"1% 2%"}}>POST HIRING</Button>
                 </Form>
                 </Col>
                 <Col lg={3} sm = {12} xs={12}>
                 <img src={pic} style={{width:"300px"}}/>
                 </Col>
                 </Row>
            </Col>
            </Row>
        </Container>
        </React.Fragment>
  )
}

export default PostJobs