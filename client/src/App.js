import React from 'react'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CompanyLogin from './CompanyLogin';
import CompanySignup from './CompanySignup';
import InstituteSignup from './InstituteSignUp';
import InstituteLogin from './InstituteLogin';
import MyDashboard from './Components/MyDashboard';
import CompanyProfile from './Components/CompanyProfile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Home/>}/>
      <Route exact path='/companylogin' element = {<CompanyLogin/>}/>
      <Route exact path='/companysignup' element = {<CompanySignup/>}/>
      <Route exact path='/institutelogin' element = {<InstituteLogin/>}/>
      <Route exact path='/institutesignup' element = {<InstituteSignup/>}/>
      <Route exact path='/mydashboard' element = {<MyDashboard/>}/>
      <Route exact path='/cmp' element = {<CompanyProfile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App