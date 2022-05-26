import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import pic from '../Images/Ellipse 3.png'

function MyCompanyDashboard() {
  return (
    <React.Fragment>
        <Container fluid>
          <Row>
          <CompanyProfile  val = '1'/>
          <Col xl="10" lg="10" md = "10" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
          <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search College" className='inp'/>
          <Button style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
                <Row>
                  <Col className='Heading'>
                    GOLDMAN SACHS
                  </Col>
                </Row>
                <Row style={{display:"flex",justifyContent:"center"}}>
                <img src = {pic} style={{width:"200px"}}/>
                </Row>
                <Row style={{display:"flex",justifyContent:"center"}}>
                    {/* <div className='title'>About</div> */}
                    <div className='BODY'>
                    The Goldman Sachs Group, Inc. (/ˈsæks/) is an American multinational investment bank and financial services company headquartered in New York City.

Goldman Sachs was founded in 1869 and is headquartered at 200 West Street in Lower Manhattan with regional headquarters in London, Warsaw, Bangalore, Hong Kong, Tokyo and Salt Lake City and additional offices in other international financial centers.[2]It ranks 2nd on the list of investment banks in the world by revenue[3] and is ranked 59th on the Fortune 500 list of the largest United States corporations by total revenue.[4] It is considered a systemically important financial institution by the Financial Stability Board.

The company has been criticized for a lack of ethical standards,[5][6] working with dictatorial regimes,[7] cozy relationships with the US federal government via a "revolving door" of former employees,[8] and driving up prices of commodities through futures speculation.[9] While the company has appeared on the 100 Best Companies to Work For list compiled by Fortune, primarily due to its high compensation levels,[10][11] it has also been criticized by its employees for 100-hour work weeks, high levels of employee dissatisfaction among first-year analysts, abusive treatment by superiors, a lack of mental health resources, and extremely high levels of stress in the workplace leading to physical discomfort.
                    </div>
                </Row>
                  <Row style={{display:"flex"}}>
                    <span style={{fontSize:"120%",fontWeight:"bold"}}>Email:</span>
                    <span style={{marginLeft:"1%",fontSize:"120%",color:'blue'}}>
                      vishunayak2001@gmail.com
                    </span>
                  </Row>
                  <Row  style={{display:"flex"}}>
                    <span style={{fontSize:"120%",fontWeight:"bold"}}>Visit:</span>
                    <span style={{marginLeft:"1%",wordBreak:"break-all",fontSize:"120%",color:'blue'}}>
                    http://localhost:3000/mycompanydashboard
                    </span>
                  </Row>
            </Col>
            </Row>
        </Container>
        </React.Fragment>
  )
}

export default MyCompanyDashboard