import React from 'react'
import { Container,Row,Col,Form,Button, FloatingLabel } from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import pic from '../Images/Ellipse 3.png'

function UpdateProfile() {
  return (
    <Container fluid>
          <Row>
          <CompanyProfile/>
          <Col xl="9" lg="9" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
              <Row >
                <Col sm = {12} xs={12} md={6} lg={6} >
                  <Form style={{display:"flex"}}>
                <input placeholder="Search College" className='inp'/>
                <Button style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
                </Form></Col>
                <Col style={{display:"flex",justifyContent:"end"}}>
                logout
                </Col>
                </Row>
                <Row>
                  <Col className='Heading'>
                    Update Profile
                  </Col>
                </Row>
                 <Form>
                 <FloatingLabel label="Company Name" className="mb-3">
                   <Form.Control type="text" placeholder="Company Name" />
                   </FloatingLabel>
                   <FloatingLabel label="Email address" className="mb-3">
                   <Form.Control type="email" placeholder="name@example.com" />
                   </FloatingLabel>
                   <FloatingLabel label="Description" className="mb-3">
                   <Form.Control as="textarea" style={{height:"200px"}} maxLength="1000" placeholder="description about company"/>
                   </FloatingLabel>
                 <FloatingLabel label="Website" className="mb-3">
                   <Form.Control type="text" placeholder="website" />
                   </FloatingLabel>
                   <Form.Group className="mb-3" >
    <Form.Label>Add/Update Image</Form.Label>
    <Form.Control type="file" placeholder="Image" />
    </Form.Group>
    <Button type='submit' className='but1 px-4 py-1'>SUBMIT</Button>
                 </Form>
            </Col>
            </Row>
        </Container>
  )
}

export default UpdateProfile