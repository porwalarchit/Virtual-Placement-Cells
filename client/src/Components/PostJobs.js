import React from 'react'
import { Container,Row,Col,Form,Button, FloatingLabel} from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import pic from '../Images/login.png'

function PostJobs() {
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
                    Create Hiring
                  </Col>
                </Row>
                <Row>
                  <Col>
                 <Form>
                 <FloatingLabel label="Job Name" className="mb-3">
                   <Form.Control type="text" placeholder="Job Name" />
                   </FloatingLabel>
                   <FloatingLabel label="Company Name" className="mb-3">
                   <Form.Control type="text" placeholder="Company Name" />
                   </FloatingLabel>
                   <FloatingLabel label="Job Description (not more than 6000 words)" className="mb-3">
                   <Form.Control as="textarea" style={{height:"200px"}} maxLength="6000" placeholder="description about company"/>
                   </FloatingLabel>
                 <FloatingLabel label="Requirements" className="mb-3">
                   <Form.Control type="text" placeholder="website" />
                   </FloatingLabel>
                   <FloatingLabel label="Duration" className="mb-3">
                   <Form.Control type="text" placeholder="Duration" />
                   </FloatingLabel>
                   <FloatingLabel label="Job type" className="mb-3">
                   <Form.Select >
                     <option>Full-Time</option>
                     <option value="1">Internship</option>
                     <option value="2">Contract</option>
                     <option value="3">Associate</option>
                     </Form.Select>
                   </FloatingLabel>
                   <FloatingLabel label="Stipend" className="mb-3">
                   <Form.Control type="number" placeholder="website" />
                   </FloatingLabel>
                   <FloatingLabel label="Deadline" className="mb-3">
                   <Form.Control type="date" placeholder="website" />
                   </FloatingLabel>
                   
    <Button type='submit' className='but1 px-4 py-1'>POST HIRING</Button>
                 </Form>
                 </Col>
                 <Col lg={3} sm = {12} xs={12}>
                 <img src={pic} style={{width:"350px"}}/>
                 </Col>
                 </Row>
            </Col>
            </Row>
        </Container>
  )
}

export default PostJobs