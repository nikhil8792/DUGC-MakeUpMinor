// import axios from 'axios'; 
// import { useEffect, useState } from 'react'; 
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar.components";
import Home from "./components/home.components";
import Approve from "./components/approval.components";
import Display from "./components/printApproved.component";

function App() {

  return (
    <Router>
      <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fkle_logo.png?alt=media&token=77f3a631-91a5-40f1-9fca-16001e566cd2"alt="Scholarship"class="img-fluid  mx-auto d-block float-xl-left float-lg-left float-md-left logoleft"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <b><h4 class="text-center1">Login - Departmental Under Graduate Committee</h4></b>
                <h6 class="text-center2">School of Computer Science and Engineering</h6>
                <b><h7 class="text-center3">(For Academic Year 2022-23)</h7></b>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img style={{width:"10rem"}} src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2FKLES-Centenary-LOGO-PNG.png?alt=media&token=13cfe0d3-7384-4cfa-81e0-28f6395accdd" alt="" class="img-fluid mx-auto  d-block float-xl-right float-lg-right float-md-right logoright"/>
                
            </div>
        </div>
    </div>
    
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/update" exact element={< Approve />}></Route>
          <Route path="/Print" exact element={<Display/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;