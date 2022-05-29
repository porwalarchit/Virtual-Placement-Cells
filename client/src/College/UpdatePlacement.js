import React from 'react'
import { Container,Row,Col,Form,Button, FloatingLabel } from 'react-bootstrap'
import CollegeProfile from './CollegeProfile'
import '../Components/CompanyProfile.css'
import pic from '../Images/Ellipse 3.png'

function UpdatePlacement() {
    return (
        <React.Fragment>
        <Container fluid>
              <Row>
              <CollegeProfile val = '3'/>
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
                        Add Placement
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                     <Form>
                     <FloatingLabel label="Student Name" className="mb-3">
                       <Form.Control type="text" placeholder="College Name" />
                       </FloatingLabel>
                       <FloatingLabel label="Company" className="mb-3">
                       <Form.Control type="text" placeholder="name@example.com" />
                       </FloatingLabel>
                       <FloatingLabel label="Profile" className="mb-3">
                       <Form.Control type="text" placeholder="name@example.com" />
                       </FloatingLabel>
                     <FloatingLabel label="Package" className="mb-3">
                       <Form.Control type="number" placeholder="website" />
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

export default UpdatePlacement