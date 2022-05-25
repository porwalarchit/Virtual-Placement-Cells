import React from 'react'
import { Container,Row,Col,Form,Button, FloatingLabel } from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import pic from '../Images/login.png'
import College from './College'

function Colleges() {
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
                    Colleges
                  </Col>
                </Row>
                  <College/>
                  <College/>
                  <College/>
            </Col>
            </Row>
        </Container>
  )
}

export default Colleges