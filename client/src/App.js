import React from 'react'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CompanyLogin from './CompanyLogin';
import CompanySignup from './CompanySignup';
import InstituteSignup from './InstituteSignUp';
import InstituteLogin from './InstituteLogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/companylogin' element = {<CompanyLogin/>}/>
      <Route path='/companysignup' element = {<CompanySignup/>}/>
      <Route path='/institutelogin' element = {<InstituteLogin/>}/>
      <Route path='/institutesignup' element = {<InstituteSignup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App