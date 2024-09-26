import React from "react";


function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="./src/assets/img/Center@4x.png" width="160px" alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item px-2 mx-4">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item px-2 mx-4">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item px-2 mx-4">
              <a className="nav-link active" href="/contact">Contact</a>
            </li>
           {/* {  <li className="nav-item dropdown"> 
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          <div>
              <a href="#" className="btn btn-primary px-5">Donate Now</a>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Header;