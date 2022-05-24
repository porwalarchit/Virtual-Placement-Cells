import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import pic from '../Images/Ellipse 3.png'
import './CompanyProfile.css'

function CompanyProfile() {
  return (
    <Container fluid>
        <Row>
            <Col xl="3" lg="3" md = "3" sm ="12" xs="12" style={{color:"white",backgroundColor:"black",paddingTop:"2%"}}>
            <div style={{fontSize:"160%",fontFamily:"sans-serif",fontWeight:"bold",marginBottom:"15%",textAlign:"center"}}>Virtual Placement Cell</div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"15%"}}><img src={pic} /> </div>
            <div style={{marginLeft:"15%",marginBottom:"20%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <div><Button className='but'>My Dashboard</Button></div>
                <div><Button className='but'>Update Profile</Button></div>
                <div><Button className='but'>College</Button></div>
                <div><Button className='but'>Post Job</Button></div>
                <div><Button className='but'>View Applications</Button></div>
            </div>
            </Col>
            <Col xl="9" lg="9" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
              <Row >
                <Col sm = {12} xs={12} md={6} lg={6} style={{display:"flex"}}>
                <input placeholder="Search College" className='inp'/>
                <Button style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
                </Col>
                <Col style={{display:"flex",justifyContent:"end"}}>
                logout
                </Col>
                </Row>
                <BrowserRouter>
                </BrowserRouter>
            </Col>
        </Row>
    </Container> 
  )
}

export default CompanyProfile