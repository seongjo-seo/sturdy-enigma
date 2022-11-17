import React from 'react';
import {Link} from "react-router-dom";

import "../static/core.css"

const MypageNav =() =>{
  return (
    <>
      
      {/* static-top        topbar */}
      <nav class="side-nav-bar pe-4 pb-3">
        <div class="navbar bg-light navbar-light">
              <Link to={"/"} class="navbar-brand mx-4 mb-3"><img src='/img/mainLogo.png' alt='...'/></Link>

              <div class="navbar-nav w-100">
                  <Link to={"/member/Mypage"} class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>대시보드</Link>
                  <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</a>
                      <div class="dropdown-menu bg-transparent border-0">
                          <a href="#" class="dropdown-item">Buttons</a>
                          <a href="#" class="dropdown-item">Typography</a>
                          <a href="#" class="dropdown-item">Other Elements</a>
                      </div>
                  </div>
                  <a href="#" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</a>
                  <a href="#" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a>
                  <a href="#" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</a>
                  <a href="#" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</a>
                  <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</a>
                      <div class="dropdown-menu bg-transparent border-0">
                          <a href="#" class="dropdown-item">Sign In</a>
                          <a href="#" class="dropdown-item">Sign Up</a>
                          <a href="#" class="dropdown-item">404 Error</a>
                          <a href="#" class="dropdown-item">Blank Page</a>
                      </div>
                  </div>
              </div>
        </div>
      </nav>

    </>
  );
};

export default MypageNav;