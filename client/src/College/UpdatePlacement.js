import React,{useState} from 'react'
import { Alert,Container,Row,Col,Form,Button, FloatingLabel } from 'react-bootstrap'
import CollegeProfile from './CollegeProfile'
import '../Components/CompanyProfile.css'
import pic from '../Images/Ellipse 3.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdatePlacement() {
  const [stnm,setStnm] = useState("");
  const [file,setFile] = useState([]);
  const [cmp,setCmp] = useState("");
  const [prf,setPrf] = useState("");
  const [pkg,setpkg] = useState("");
  const [msg,setMsg] = useState("");
  const [style,setStyle] = useState("danger");
  const navigate = useNavigate();
  const handleClick = (e)=>{
    e.preventDefault() ;
    console.log(localStorage.getItem('jwtToken'));
    if(stnm ==="" || file ==="" || cmp ==="" )
    {
      setMsg("ALL FIELDS REQUIRED");
      return;
    }
    let fd = new FormData() ; 
    fd.append("studentImage",file[0]) ; 
    fd.append("company",cmp) ; 
    fd.append("profile",prf);
    fd.append("package",pkg) ; 
    fd.append("studentName",stnm);
    const data = {
      headers:{
        authorization: localStorage.getItem("jwtToken"),
        'Content-Type': 'multipart/form-data'
      }
    }
    console.log(fd.values())
    axios.post("http://localhost:5000/college/addPlacement",fd,data).then(
      (resp)=>{
        console.log(resp);
        setMsg(resp.data.message);
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
              <CollegeProfile val = '3'/>
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
                        Add Placement
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                     <Form>
                     <FloatingLabel label="Student Name" className="mb-3">
                       <Form.Control onChange = {(e)=>{setStnm(e.target.value);}}  required type="text" placeholder="College Name" />
                       </FloatingLabel>
                       <FloatingLabel label="Company" className="mb-3">
                       <Form.Control  onChange = {(e)=>{setCmp(e.target.value);}}  required type="text" placeholder="name@example.com" />
                       </FloatingLabel>
                       <FloatingLabel label="Profile" className="mb-3">
                       <Form.Control  onChange = {(e)=>{setPrf(e.target.value);}} type="text" placeholder="name@example.com" />
                       </FloatingLabel>
                     <FloatingLabel label="Package" className="mb-3">
                       <Form.Control  onChange = {(e)=>{setpkg(e.target.value);}}  type="text" placeholder="website" />
                       </FloatingLabel>
                       <Form.Group className="mb-3" >
        <Form.Label>New Image</Form.Label>
        <Form.Control onChange = {(e)=>{setFile(e.target.files);}} required type="file" placeholder="Image" />
        </Form.Group>
        {msg&&
            <Alert variant={style} style={{marginBottom:"3%"}} onClose={() => setMsg("")} dismissible>
        {msg}
      </Alert>}
        <Button onClick={handleClick} style={{backgroundColor:"cadetblue",fontSize:"100%",padding:"1% 2%"}}>SUBMIT</Button>
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

export default UpdatePlacement