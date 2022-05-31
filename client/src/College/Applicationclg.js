import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
import pic from '../Images/Ellipse 3.png'

function Applicationclg({dt}) {
    
    return (
        <Row style={{backgroundColor:" rgba(217, 217, 217, 0.7)",margin:"2%",padding:"2%",borderRadius:"20px",width:"95%",border:"double cadetblue"}}>
            <Col lg={2} sm= {12} md = {2} xs={12} xl={2}>
            <img src={pic} style={{width:"50px"}}/>
            </Col>
            <Col lg={6} sm= {12} md = {6} xs={12} xl={6}  style={{alignItems:"center",textAlign:"center"}}>
            <Row style={{fontSize:"190%",alignItems:"center",fontWeight:"bold"}}>{dt.companyName}</Row>
            <Row style={{fontSize:"110%",alignItems:"center"}}>{dt.jobName}</Row>
            </Col>
            {
                dt.status === "Accepted" &&
                <Col lg={4} sm= {12} md = {4} xs={5} xl={4} style={{fontSize:"150%",alignItems:"center",fontWeight:"bold",color:"green"}}>
                <span style={{color:"black"}}>Status: </span>
                <span> {dt.status}</span>
          
            </Col>
            }
            {
                dt.status === "Pending" &&
                <Col lg={4} sm= {12} md = {4} xs={5} xl={4} style={{fontSize:"150%",alignItems:"center",fontWeight:"bold",color:"orange"}}>
           <span style={{color:"black"}}>Status: </span>
                <span> {dt.status}</span>
            </Col>
            }
            {
                dt.status === "Rejected" &&
                <Col lg={4} sm= {12} md = {4} xs={5} xl={4} style={{fontSize:"150%",alignItems:"center",fontWeight:"bold",color:"red"}}>
           <span style={{color:"black"}}>Status: </span>
                <span> {dt.status}</span>
            </Col>
            }
        </Row>
      )
}

export default Applicationclg