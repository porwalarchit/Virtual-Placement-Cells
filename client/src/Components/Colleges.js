import React,{useEffect,useState} from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import axios from 'axios'
import College from './College'

function Colleges() {
  const [data,setData] = useState([]);
const [msg,setMsg] = useState("");
const config = {
  headers:{
    authorization:localStorage.getItem('jwtToken'),
  }
}
useEffect(()=>{
  axios.get("http://localhost:5000/company/getAllCollege",config).then((resp)=>{
  setData(resp.data);
    }).catch((err)=>{
      setMsg("Some Error Occured");
    })
},[]);

  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CompanyProfile val = '3'/>
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
                    Colleges
                  </Col>
                </Row>
                {data.length === 0 &&
                setTimeout(() => {
                  return <h1>No College Found</h1>
                }, 3000)
                }
                  {
                   data.map((d)=>(
                      <College key = {data._id} dt = {d}></College>
                   ))
                  }
            </Col>
            </Row>
        </Container>
        </React.Fragment>
  )
}

export default Colleges