import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import pic from '../Images/Ellipse 3.png'
import './CompanyProfile.css'

function CompanyProfile() {

  return (
            <Col xl="3" lg="3" md = "3" sm ="12" xs="12" style={{color:"white",backgroundColor:"black",paddingTop:"2%"}}>
            <div style={{fontSize:"160%",fontFamily:"sans-serif",fontWeight:"bold",marginBottom:"15%",textAlign:"center"}}>Virtual Placement Cell</div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"15%"}}><img src={pic} /> </div>
            <div style={{marginLeft:"15%",marginBottom:"20%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <Link to = "/mycompanydashboard" ><div><Button id = "but1" className='but1'>My Dashboard</Button></div></Link>
                <Link to = "/UpdateProfile" ><div><Button id = "but2" className='but2'>Update Profile</Button></div></Link>
                <Link to = "/Colleges"><div><Button id = "but3" className='but2'>College</Button></div></Link>
                <Link to = "/PostJobs" ><div><Button id = "but4" className='but2'>Post Job</Button></div></Link>
                <Link to = "/Applications" ><div><Button id = "but5" className='but2'>View Applications</Button></div></Link>
            </div>
            </Col>
  )
}

export default CompanyProfile
