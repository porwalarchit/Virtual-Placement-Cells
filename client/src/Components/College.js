import React from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'

function College({dt}) {
  return (
    <Row style={{backgroundColor:"whitesmoke",margin:"2%",padding:"2%",borderRadius:"20px",width:"90%",border:"double cadetblue"}}>
        <Col lg={2} sm= {12} md = {2} xs={12} xl={2}>
        <img src={dt.profileImg} style={{width:"80px",borderRadius:"50%"}}/>
        </Col>
        <Col lg={7} sm= {7} md = {7} xs={7} xl={7}>
        <Row style={{fontSize:"140%",alignItems:"center",fontWeight:"bold"}}>
        {dt.collegeName}
        </Row>
        <Row style={{fontSize:"100%",alignItems:"center",fontWeight:"normal",fontStyle:"italic",color:"blueviolet"}}>
        {dt.email}
        </Row>
        </Col>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
        <Link to={`/clgfromcmpny/${dt._id}`}><div></div><div><Button className="px-5 py-2" style={{fontSize:"120%",backgroundColor:"cadetblue",borderRadius:"15px"}}>View</Button></div>
        </Link>
        </Col>
    </Row>
  )
}

export default College