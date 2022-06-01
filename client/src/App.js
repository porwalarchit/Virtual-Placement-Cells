import React from 'react'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CompanyLogin from './CompanyLogin';
import CompanySignup from './CompanySignup';
import InstituteSignup from './InstituteSignUp';
import InstituteLogin from './InstituteLogin';
import MyCompanyDashboard from './Components/MyCompanyDashboard';
import PostJobs from './Components/PostJobs';
import UpdateProfile from './Components/UpdateProfile'
import Applications from './Components/Applications'
import Colleges from './Components/Colleges'
import SetCollegeProfile from './Components/SetCollegeProfile';
import SetCompanyProfile from './Components/SetCompanyProfile';
import MyCollegeDashboard from './College/MyCollegeDashboard';
import ContactUs from './Components/ContactUs';
import UpdateCollegeProfile from './College/UpdateCollegeProfile';
import UpdatePlacement from './College/UpdatePlacement';
import ViewJobs from './College/ViewJobs';
import ViewApplication from './College/ViewApplication';
import ViewPlacements from './College/ViewPlacements';
import Contactus from './College/Contactus';
import CompanyJobs from './Components/CompanyJobs'
import Collegefromcomp from './Components/Collegefromcomp';
import CollegeSearch from './College/CollegeSearch';
import CompanySearch from './Components/CompanySearch';

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
      <Route exact path='/mycollegedashboard' element = {<MyCollegeDashboard/>}/>
      <Route exact path='/comcon' element = {<ContactUs/>}/>
      <Route exact path='/contact' element = {<Contactus/>}/>
      <Route exact path='/updatecollege' element = {<UpdateCollegeProfile/>}/>
      <Route exact path='/updateplacement' element = {<UpdatePlacement/>}/>
      <Route exact path='/ViewJobs' element = {<ViewJobs/>}/>
      <Route exact path='/ViewApplication' element = {<ViewApplication/>}/>
      <Route exact path='/ViewPlacements' element = {<ViewPlacements/>}/>
      <Route exact path='/companyjobs' element = {<CompanyJobs/>}/>
      <Route exact path='/clgfromcmpny/:id' element = {<Collegefromcomp/>}/>
      <Route exact path='/clgsearch' element = {<CollegeSearch/>}/>
      <Route exact path='/cmpnysearch' element = {<CompanySearch/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App