import React from 'react'
import { Container,Row,Form,Button, FloatingLabel } from 'react-bootstrap'
import './CompanyProfile.css'
import { Link } from 'react-router-dom'

function SetCollegeProfile() {
  return (
    <Container fluid>
        <Row style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{color:"white",backgroundColor:"black",fontSize:"160%",fontWeight:"bold",fontFamily:"sans-serif"}}>Virtual Placement Cell</div>
    </Row>
    <div style={{fontSize:"250%",textAlign:"center",marginTop:"2%",fontWeight:"bolder"}}>
        FINAL STEP
    </div>
    <div style={{fontSize:"180%",textAlign:"center",marginBottom:"3%"}}>
        KINDLY SET UP YOUR PROFILE
    </div>
    <Form>
                 <FloatingLabel label="Company Name" className="mb-3">
                   <Form.Control required type="text" style={{height:"50px"}} placeholder="Company Name" />
                   </FloatingLabel>
                   <FloatingLabel label="Email address" className="mb-3">
                   <Form.Control required type="email" style={{height:"50px"}} placeholder="name@example.com" />
                   </FloatingLabel>
                   <FloatingLabel label="Description" className="mb-3">
                   <Form.Control required as="textarea" style={{height:"130px"}} maxLength="1000" placeholder="description about company"/>
                   </FloatingLabel>
                 <FloatingLabel label="Website" className="mb-3">
                   <Form.Control required type="text" placeholder="website" />
                   </FloatingLabel>
                   <Form.Group className="mb-3" >
    <Form.Label style={{fontWeight:"bolder"}}>New Image</Form.Label>
    <Form.Control type="file" placeholder="Image" />
    </Form.Group>
    <div  style={{display:"flex",justifyContent:"center"}}>
    <Link to="/mycollegedashboard"><Button type='submit' className='but1 px-4 py-1'>SUBMIT</Button></Link>
    </div>
                 </Form>
    </Container>
  )
}
export default SetCollegeProfile