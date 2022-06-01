import React, { useEffect, useState } from 'react'
import CollegeProfile from './CollegeProfile'
import '../Components/CompanyProfile.css'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
import axios from 'axios'
import Cmp from './Cmp'

function CollegeSearch() {

  const config = {
    headers:{
      authorization:localStorage.getItem('jwtToken'),
    }
  }
  const [val,setVal]= useState('')
  const [msg,setMsg]= useState('')
  const [data,setData]= useState([])
  const[head,setHead] = useState('Search Here');
    const gosearch = ()=>{
      const query = val===""?"/":`?companyName=${val}`;
      console.log(query)
      axios.get(`http://localhost:5000/college/searchCompany${query}`,config).then((resp)=>{
     console.log(resp);
     setMsg("");
     setData(resp.data.filteredArr);
      }).catch((err)=>{
        console.error(err);
        setMsg("No Company Found");
      })
      }
      useEffect(()=>{
        setHead('Search Results:');
      },[msg])
  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CollegeProfile val = '4'/>
          <Col xl="10" lg="10" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
          <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input onChange={(e)=>{setVal(e.target.value)}} placeholder="Search Company" className='inp'/>
          <Button onClick={gosearch} style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
                <Row>
                  <Col className='Heading'>
                    {head}
                  </Col>
                </Row>
                <Row>
                  {
                    msg!=="" &&
                    <h1 style={{color:"red"}}>{msg}</h1>
                  }
                {
                   data.map((d)=>(
                      <Cmp key = {data._id} dt = {d}></Cmp>
                   ))
                  }
                </Row>
            </Col>
            </Row>
            
        </Container>
        </React.Fragment>
  )
}

export default CollegeSearch