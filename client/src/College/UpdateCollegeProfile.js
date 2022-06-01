import React,{useState} from 'react'
import { Alert,Container,Row,Col,Form,Button, FloatingLabel } from 'react-bootstrap'
import CollegeProfile from './CollegeProfile'
import '../Components/CompanyProfile.css'
import pic from '../Images/Ellipse 3.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateCollegeProfile() {
  const [desc,setDesc] = useState("");
  const [file,setFile] = useState([]);
  const [web,setWeb] = useState("");
  const [msg,setMsg] = useState("");
  const [style,setStyle] = useState("danger");
  const navigate = useNavigate();
  const handleClick = (e)=>{
    e.preventDefault() ;
    console.log(localStorage.getItem('jwtToken'));
    if(file ==="")
    {
      setMsg("ALL FIELDS REQUIRED");
      return;
    }
    let fd = new FormData() ; 
    fd.append("profileImg",file[0]) ; 
    fd.append("description",desc) ; 
    fd.append("website",web)
    const data = {
      headers:{
        authorization: localStorage.getItem("jwtToken"),
        'Content-Type': 'multipart/form-data'
      }
    }
    console.log(fd.values())
    axios.patch("http://localhost:5000/college/update/profile",fd,data).then(
      (resp)=>{
        console.log(resp);
        setMsg("Successfully Registered");
        setStyle("success");
        setTimeout(()=>{navigate("/mycollegedashboard")},500);
      }
    ).catch((err)=>{setMsg(err.response.data.message);console.error(err);})
  }
  const gosearch = ()=>{
    navigate('/clgsearch');
  }

  return (
    <React.Fragment>
    <Container fluid>
          <Row>
          <CollegeProfile val = '2'/>
          <Col xl="10" lg="10" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
          <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search Company" className='inp'/>
          <Button onClick={gosearch} style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
                <Row>
                  <Col className='Heading'>
                    Update College Profile
                  </Col>
                </Row>
                <Row>
                  <Col>
                 <Form>
                   <FloatingLabel label="Description" className="mb-3">
                   <Form.Control  onChange = {(e)=>{setDesc(e.target.value);}}  as="textarea" style={{height:"200px"}} maxLength="1000" placeholder="description about company"/>
                   </FloatingLabel>
                 <FloatingLabel label="Website" className="mb-3">
                   <Form.Control  onChange = {(e)=>{setWeb(e.target.value);}} type="text" placeholder="website" />
                   </FloatingLabel>
                   <Form.Group className="mb-3" >
    <Form.Label>New Image</Form.Label>
    <Form.Control  onChange = {(e)=>{setFile(e.target.files);console.log(file.path)}} required type="file" placeholder="Image" />
    </Form.Group>
    {msg&&
            <Alert variant={style} style={{marginBottom:"3%"}} onClose={() => setMsg("")} dismissible>
        {msg}
      </Alert>}
    <Button  onClick={handleClick} style={{backgroundColor:"cadetblue",fontSize:"100%",padding:"1% 2%"}}>SUBMIT</Button>
                 </Form>
                 </Col>
                 <Col lg={3} sm = {12} xs={12}>
                 <img src={pic} style={{width:"300px"}}/>
                 </Col>
                 </Row>
            </Col>
            </Row>
        </Container>
        </React.Fragment>
  )
}

export default UpdateCollegeProfile