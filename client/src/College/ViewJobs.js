import React from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
import CollegeProfile from './CollegeProfile'
import '../Components/CompanyProfile.css'
import Job from './Job'

function ViewJobs() {

  
  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CollegeProfile val = '4'/>
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
                    View Jobs
                  </Col>
                </Row>
                  <Job/>
                  <Job/>
                  <Job/>
            </Col>
            </Row>
        </Container>
        </React.Fragment>
  )
}

export default ViewJobs