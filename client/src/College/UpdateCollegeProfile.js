import React from 'react'
import { Container,Row,Col,Form,Button, FloatingLabel } from 'react-bootstrap'
import CollegeProfile from './CollegeProfile'
import '../Components/CompanyProfile.css'
import pic from '../Images/Ellipse 3.png'

function UpdateCollegeProfile() {
  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CollegeProfile val = '2'/>
          <Col xl="10" lg="10" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
          <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search College" className='inp'/>
          <Button style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
                <Row>
                  <Col className='Heading'>
                    Update Profile
                  </Col>
                </Row>
                <Row>
                  <Col>
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
    <Form.Label>New Image</Form.Label>
    <Form.Control type="file" placeholder="Image" />
    </Form.Group>
    <Button type='submit' style={{backgroundColor:"cadetblue",fontSize:"100%",padding:"1% 2%"}}>SUBMIT</Button>
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

export default UpdateCollegeProfile