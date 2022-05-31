import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Placement from '../College/Placement'
import { Container, Row } from 'react-bootstrap';

function Collegefromcomp() {
    const {id} = useParams();
    const [data,setData] = useState([]);
    const config = {
      headers:{
        authorization:localStorage.getItem('jwtToken'),
      }
    }
    useEffect(()=>{
      axios.get(`http://localhost:5000/company/getAllCollege/placements/${id}`,config).then((resp)=>{
        console.log(resp)
        setData(resp.data);
        }).catch((err)=>{
          console.error(err)
        })
    },[]);


  return (
    <Container>
        <Row style={{margin:"5%"}}>
           <h1>These are this year's placement of this college!</h1> 
        </Row>
    <Row>
                 {
                   data.map((d)=>(
                      <Placement key = {data._id} dt = {d}></Placement>
                   ))
                  }
     </Row>
     </Container>
  )
}

export default Collegefromcomp