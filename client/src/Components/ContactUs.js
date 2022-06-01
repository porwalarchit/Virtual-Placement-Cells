import React, { useState } from 'react'
import { Container,Row,Col,Form,Button,FloatingLabel} from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import '../Components/CompanyProfile.css'
import pic1 from '../Images/multi_user.jpg'
import pic from '../Images/user.jpeg'
import emailjs from "emailjs-com"
import { useNavigate } from 'react-router-dom'

function ContactUs() {
  const [msg,setMsg]=useState("");
  const nav = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_ba05nde','template_n358vgs',event.target,'user_XQZLfdP4na11L1AnqPxQG').then(res=>{console.log(res);}).catch(err=>{console.log(err);});
    setMsg("Email Successfully sent!");
    event.target.reset();
    setTimeout(()=>{nav("/mycollegedashboard")},500);
  }
  const gosearch = ()=>{
    nav('/cmpnysearch');
  }

  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CompanyProfile val = '7'/>
          <Col xl="10" lg="10" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
          <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search College" className='inp'/>
          <Button onClick={gosearch}  style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
                <Row>
                  <Col className='Heading'>
                    About Us
                  </Col>
                </Row>
                <Row>
                  <Col style={{display:"flex",justifyContent:"center",marginBottom:"2%"}}>
                    <img src={pic1} style={{width:"20%"}}/>
                  </Col>
                </Row>
                <Row  style={{margin:"2%",backgroundColor:"whitesmoke",padding:"2%",borderRadius:"15px",border:"solid gold"}}>
                  <Col  lg={3} sm= {12} md = {3} xs={12} xl={3}  style={{display:"flex",justifyContent:"center"}}>
                    <img src={pic} style={{width:"40%",height:"120px"}}/>
                  </Col>
                  <Col>
                  <Row>
                    <h1>Archit Porwal</h1>
                  </Row>
                  <Row>
                    He worked on the backend of this project.
                  </Row>
                  </Col>
                </Row>
                <Row  style={{margin:"2%",backgroundColor:"whitesmoke",padding:"2%",borderRadius:"15px",border:"solid gold"}}>
                  <Col  lg={3} sm= {12} md = {3} xs={12} xl={3}  style={{display:"flex",justifyContent:"center"}}>
                    <img src={pic} style={{width:"40%",height:"120px"}}/>
                  </Col>
                  <Col>
                  <Row>
                    <h1>Anany Nayak</h1>
                  </Row>
                  <Row>
                    He worked on the frontend part of this project.
                  </Row>
                  </Col>
                </Row>
                <Row  style={{margin:"2%",backgroundColor:"whitesmoke",padding:"2%",borderRadius:"15px",border:"solid gold"}}>
                  <Col  lg={3} sm= {12} md = {3} xs={12} xl={3}  style={{display:"flex",justifyContent:"center"}}>
                    <img src={pic} style={{width:"40%",height:"120px"}}/>
                  </Col>
                  <Col>
                  <Row>
                    <h1>KUNWAR Arin Dixit</h1>
                  </Row>
                  <Row>
                    He worked on the UI-UX of this project.
                  </Row>
                  </Col>
                </Row>
                <Row style={{width:"60%",border:"double gold",display:"flex",justifyContent:"center",marginLeft:"2%",padding:"2%",backgroundColor:"whitesmoke"}}>
                    <h3 style={{margin:"5%"}}>CONTACT US</h3>
                    <Form onSubmit={handleSubmit} >
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" name='name'/>
  </FloatingLabel>
  <FloatingLabel label="Your Message">
    <Form.Control
      as="textarea"
      placeholder="Leave your message here" name='message'
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <div style={{color:"green",fontSize:"100%",backgroundColor:"palegreen",fontWeight:"bold"}}>
  {msg}
  </div>
  <Button type="submit" style={{backgroundColor:"cadetblue",marginTop:"2%",padding:"1% 3%"}}>Send</Button>
                    </Form>
                </Row>
            </Col>
            </Row>
        </Container>
        </React.Fragment>
      )
}

export default ContactUs