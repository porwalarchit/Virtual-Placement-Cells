import React, { useState } from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import pic from '../Images/Ellipse 3.png'

function Job({dt}) {
    const [msg,setMsg] = useState('')
  const navigate = useNavigate();
  const handleClick = (e)=>{
    e.preventDefault() ;
    const data = {
      headers:{
        authorization: localStorage.getItem("jwtToken"),
      }
    }
    const config = {
         jobid:dt._id,
        }
    console.log(dt);
    axios.post(`http://localhost:5000/college/applyforCompany/${dt._id}`,config,data).then(
      (resp)=>{
        setMsg("");
        setTimeout(()=>{navigate("/ViewApplication")},500);
      }
    ).catch((err)=>{setMsg("Already Applied");
        console.error(err);})
  }


    const arr = dt.jobPerks;

    return (
      <Row style={{backgroundColor:"rgba(217, 217, 217, 0.5)",margin:"2% 1%",borderRadius:"15px",padding:"1%"}}>
      <Col lg={2} sm= {12} md = {2} xs={12} xl={2} >
          <img src={dt.companyImg} style={{width:"80px"}}/>
          </Col>
          <Col lg={7} sm= {7} md = {7} xs={7} xl={7}>
          <Row style={{fontSize:"150%",fontWeight:"bold"}}>
              {dt.companyName}
          </Row>
          <Row style={{fontSize:"90%",fontWeight:"bold"}}>
              {dt.jobName}
          </Row>
          <Row style={{fontSize:"90%"}}>
              {dt.jobRequirements}
          </Row>
          </Col>
          <Col >
          <Row style={{fontSize:"90%",fontWeight:"bold"}}>
              {dt.jobType}
          </Row>
          <Row style={{fontSize:"80%"}}>
              {dt.duration}
          </Row>
          <Row>
             <Button onClick={handleClick} style={{width:"80%"}}>Apply</Button>
          </Row>
          <Row>
             <div style={{color:"red",fontWeight:"bold"}}>{msg}</div>
          </Row>
          <Row style={{fontSize:"130%"}}>
              {arr.map(d=>
                  <div>d</div>
              )}
          </Row>
          </Col>
      </Row>
    )
}

export default Job