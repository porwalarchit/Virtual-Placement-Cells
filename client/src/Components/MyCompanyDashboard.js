import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import pic from '../Images/Ellipse 3.png'

function MyCompanyDashboard() {
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
                    GOLDMAN SACHS
                  </Col>
                </Row>
                 
                <Row style={{marginBottom:"2%"}}>
                    <div className='title'>Description</div>
                    <div className='BODY'>
                      body
                    </div>
                </Row>
                <Row style={{marginBottom:"2%"}}>
                  <Col style={{display:"flex"}}>
                    <span className='title'>Email:</span>
                    <span style={{marginLeft:"1%",paddingTop:"15px",fontSize:"120%"}}>
                      vishunayak2001@gmail.com
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col style={{display:"flex"}}>
                    <span className='title'>Visit:</span>
                    <span style={{marginLeft:"1%",paddingTop:"18px",wordBreak:"break-all"}}>
                    http://localhost:3000/mycompanydashboard
                    </span>
                  </Col>
                </Row>
            </Col>
            </Row>
        </Container>
  )
}

export default MyCompanyDashboard