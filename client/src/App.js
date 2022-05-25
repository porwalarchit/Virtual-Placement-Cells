import React from 'react'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CompanyLogin from './CompanyLogin';
import CompanySignup from './CompanySignup';
import InstituteSignup from './InstituteSignUp';
import InstituteLogin from './InstituteLogin';
import MyCompanyDashboard from './Components/MyCompanyDashboard';
import CompanyProfile from './Components/CompanyProfile';
import PostJobs from './Components/PostJobs';
import UpdateProfile from './Components/UpdateProfile'
import Applications from './Components/Applications'
import Colleges from './Components/Colleges'
import SetCollegeProfile from './Components/SetCollegeProfile';
import SetCompanyProfile from './Components/SetCompanyProfile';
import MyCollegeDashboard from './Components/MyCollegeDashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Home/>}/>
      <Route exact path='/companylogin' element = {<CompanyLogin/>}/>
      <Route exact path='/companysignup' element = {<CompanySignup/>}/>
      <Route exact path='/institutelogin' element = {<InstituteLogin/>}/>
      <Route exact path='/institutesignup' element = {<InstituteSignup/>}/>
      <Route exact path='/mycompanydashboard' element = {<MyCompanyDashboard/>}/>
      <Route exact path='/PostJobs' element = {<PostJobs/>}/>
      <Route exact path='/UpdateProfile' element = {<UpdateProfile/>}/>
      <Route exact path='/Applications' element = {<Applications/>}/>
      <Route exact path='/Colleges' element = {<Colleges/>}/>
      <Route exact path='/setcollege' element = {<SetCollegeProfile/>}/>
      <Route exact path='/setcompany' element = {<SetCompanyProfile/>}/>
      <Route exact path='/mycompanydashboard' element = {<MyCollegeDashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App