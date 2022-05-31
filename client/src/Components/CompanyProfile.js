import React, { useEffect, useState } from 'react'
import { Button, Col} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import pic from '../Images/Ellipse 3.png'
import './CompanyProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommenting, faGraduationCap,faIdCard,faMessage,faPaperPlane,faRightFromBracket,faUser } from '@fortawesome/free-solid-svg-icons'

function CompanyProfile({val}) {
  //jack
  const navigate = useNavigate();
  const[col1,setCol1] = useState('but2');
  const[col2,setCol2] = useState('but2');
  const[col3,setCol3] = useState('but2');
  const[col4,setCol4] = useState('but2');
  const[col5,setCol5] = useState('but2');
  const[col6,setCol6] = useState('but2');
  const[col7,setCol7] = useState('but2');
const handleClick1 = ()=>{
setCol1('but1');
}
const handleClick2 = ()=>{
  setCol2('but1');
}
const handleClick3 = ()=>{
  setCol3('but1');
}
const handleClick4 = ()=>{
  setCol4('but1');
}
const handleClick5 = ()=>{
  setCol5('but1');
}
const handleClick6 = ()=>{
  setCol6('but1');
}
const handleClick7 = ()=>{
  setCol7('but1');
}
useEffect(
  ()=>{
    if(val === '1')
    handleClick1();
    else if(val === '2')
    handleClick2();
    else if(val === '3')
    handleClick3();
    else if(val === '4')
    handleClick4();
    else if(val === '5')
    handleClick5();
    else if(val === '6')
    handleClick6();
    else if(val === '7')
    handleClick7();
  },[]
)
//jack ended component started
  return (
    <React.Fragment>
            <Col xl="2" lg="2" md = "3" sm ="12" xs="12" style={{color:"white",backgroundColor:"black",paddingTop:"2%"}}>
            <div style={{fontSize:"160%",fontFamily:"sans-serif",fontWeight:"bold",marginBottom:"14%",textAlign:"center"}}>Virtual Placement Cell</div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"15%"}}><img src={pic} /> </div>
            <div style={{marginLeft:"7%",marginBottom:"20%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <Link id = '1' to = "/mycompanydashboard" >
                  <div>
                    <Button  className={col1}>
                    <FontAwesomeIcon icon={faUser} className="icon"/>
                      My Dashboard</Button>
                    </div>
                </Link>
                <Link id = '2'to = "/UpdateProfile" >
                  <div>
                    <Button  className={col2}>
                    <FontAwesomeIcon icon={faIdCard} className="icon"/>
                      Update Profile</Button>
                    </div>
                </Link>
                <Link id = '3' to = "/Colleges">
                  <div>
                    <Button  className={col3}>
                    <FontAwesomeIcon icon={faGraduationCap} className="icon"/>
                       College</Button>
                    </div>
                </Link>
                <Link id = '4' to = "/PostJobs" >
                  <div>
                    <Button className={col4}>
                    <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
                      Post Job</Button>
                    </div>
                    </Link>
                <Link id = '5' to = "/Applications" >
                  <div>
                    <Button className={col5}>
                    <FontAwesomeIcon icon={faMessage} className="icon"/>
                      View Applications</Button>
                    </div>
                    </Link>
                  <Link id = '6' to = "/companyjobs" >
                <div><Button id = "but6" className={col6}>
                <FontAwesomeIcon icon={faGraduationCap} className="icon"/>
                  View Jobs</Button></div>
                  </Link>
                  <Link id = '7' to = "/comcon" >
                <div><Button id = "but7" className={col7}>
                <FontAwesomeIcon icon={faCommenting} className="icon"/>
                  Contact Us</Button></div>
                  </Link>
                <div><Button onClick={()=>{
                  localStorage.removeItem('jwtToken');
                  navigate('/');
                }} id = "but7" className='but2'>
                <FontAwesomeIcon icon={faRightFromBracket} className="icon"/>
                  Logout</Button></div>
            </div>
            </Col>
            </React.Fragment>
  )
}

export default CompanyProfile
