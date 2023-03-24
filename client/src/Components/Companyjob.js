import React from 'react'
import { Row,Col } from 'react-bootstrap'
import pic from '../Images/Ellipse 3.png'

function Companyjob({dt}) {
    const arr = dt.jobPerks;
  return (
    <Row style={{backgroundColor:"rgba(217, 217, 217, 0.5)",margin:"2% 1%",borderRadius:"15px",padding:"1%",border:"double cadetblue"}}>
    <Col lg={2} sm= {12} md = {2} xs={12} xl={2} >
        <img src={dt.companyImg} style={{width:"80px"}}/>
        </Col>
        <Col lg={7} sm= {7} md = {7} xs={7} xl={7}>
        <Row style={{fontSize:"150%",fontWeight:"bold"}}>
            {dt.jobName}
        </Row>
        <Row style={{fontSize:"90%"}}>
            {dt.jobRequirements}
        </Row>
        </Col>
        <Col >
        <Row style={{fontSize:"90%",fontWeight:"bold"}}>
            {dt.jobType}
        </Row>
        <Row style={{fontSize:"80%"}}>
            {dt.duration}
        </Row>
        <Row style={{fontSize:"130%"}}>
            {arr.map(d=>
                (<div>d</div>)
            )}
        </Row>
        </Col>
    </Row>
  )
}

export default Companyjob