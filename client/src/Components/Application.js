import React, { useState,useEffect } from 'react'
import { Container,Row,Col,Form,Button, FloatingLabel } from 'react-bootstrap'
import pic from '../Images/Ellipse 3.png'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'


function Application({dt,setUpdated}) {
  const navigate = useNavigate()
const [msg,setMsg] = useState("");
const con = {
  headers:{
    authorization:localStorage.getItem('jwtToken'),
  }
}
const config1 = {
  status: "Rejected",
}
const config2 = {
  status: "Accepted",
}
const handleAccepted = ()=>{
  axios.post(`http://localhost:5000/company/viewAppliedCollege/${dt._id}`,config2,con).then((resp)=>{
  // console.log(resp);
  setUpdated(true)
  // navigate("/Applications");
    }).catch((err)=>{
      setMsg(err.response.data.message);
      // console.log(err);
    })
};
const handleRejected = ()=>{
  axios.post(`http://localhost:5000/company/viewAppliedCollege/${dt._id}`,config1,con).then((resp)=>{
  // console.log(resp);
  setUpdated(true)
    }).catch((err)=>{
      // console.log(err)
      // navigate("/Applications");
      setMsg(err.response.data.message);
    })
};

  return (
    <Row style={{backgroundColor:" rgba(217, 217, 217, 0.7)",margin:"2%",padding:"2%",borderRadius:"20px"}}>
        <Col lg={1} sm= {12} md = {1} xs={12} xl={1}>
        <img src={pic} style={{width:"50px"}}/>
        </Col>
        <Col lg={6} sm= {12} md = {6} xs={12} xl={6}  style={{alignItems:"center",textAlign:"center"}}>
        <Row style={{fontSize:"130%",alignItems:"center",fontWeight:"bold"}}>{dt.collegeName}</Row>
        <Row style={{fontSize:"110%",alignItems:"center"}}>{dt.jobName}</Row>
        <Row style={{fontSize:"80%",alignItems:"center",fontWeight:"bold",color:"red"}}>Status: {dt.status}</Row>
        </Col>
        <Col lg={2} sm= {5} md = {2} xs={5} xl={2} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Link to={`/clgfromcmpny/${dt.collegeId}`}><div>
        <Button className="px-3 py-1" style={{fontSize:"100%",backgroundColor:"rgba(9,8,20,22)",borderRadius:"15px"}}>View College</Button></div></Link>
        </Col>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
        <div style={{marginRight:"2%"}}><Button onClick={handleAccepted} className="px-3 py-1" style={{fontSize:"100%",backgroundColor:"green",borderRadius:"15px"}}>Accept</Button></div>
        <div><Button onClick={handleRejected} className="px-3 py-1" style={{fontSize:"100%",backgroundColor:"red",borderRadius:"15px"}}>Reject</Button></div>
        </Col>
    </Row>
  )
}

export default Application