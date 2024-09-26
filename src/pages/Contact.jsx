import React from "react";

function Contact(){
    return(
        <main className="container-fluid p-0" >
            <div className="container-fluid breadcrumb p-5">
              <div className="container">
                  <h1 className="display-4 text-white fw-bolder p-5">Contact</h1>
              </div>
            </div>
            <div className="container breadcrum-text">
              <p className="d-inline p-3 fs-6 bg-light">Home <span class="px-1">ॐ</span> Contact</p>
            </div>
            <div className="container-fluid p-0 localmap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d403859.4360253439!2d-121.4260018!3d37.7395818!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x809014590a55994d%3A0xe8466f79e0af1499!2sTracy%20California%20USA!3m2!1d37.739581799999996!2d-121.4260018!5e0!3m2!1sen!2sin!4v1727097417658!5m2!1sen!2sin" width="100%" height="320" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            <section className="container p-5 contact-form">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <form className="p-5 shadow p-3 mb-5 bg-body rounded" method="post">
                    <div className="row">
                      <div className="col p-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Full Name" 
                          aria-label="First name" 
                        />
                      </div>
                      <div className="col p-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          aria-label="Last name" 
                        />
                      </div>
                      <div className="col p-3">
                        <input 
                          type="tel" 
                          className="form-control" 
                          placeholder="Phone Number" 
                          aria-label="Last name" 
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col p-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Enter Message"></textarea>
                      </div>
                    </div>
                    <div className="mb-3 form-check">
                      <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheck1" 
                      />
                      <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-1"></div>
              </div>
            </section>
          

            <section className="container p-5">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-3 p-4 m-2 shadow border rounded text-center">
                        <h2 className="fs-3">Email Address</h2>
                        <p>kd@tracytemple.org</p>
                        <i className="fa-solid fa-envelope-open-text display-3 p-5"></i>
                    </div>
                    <div className="col-md-3 p-4 m-2 shadow border rounded text-center">
                        <h2 className="fs-3">Phone Number</h2>
                        <p>+1 (608) 381-5969</p>
                        <i className="fa-solid fa-phone-volume display-3 p-5"></i>
                    </div>
                    <div className="col-md-3 p-4 m-2 shadow border rounded text-center">
                        <h2 className="fs-3">Location</h2>
                        <p>11703 W Larch Rd, Tracy, CA 95304</p>
                        <i className="fa-solid fa-map-location-dot display-3 p-5"></i>
                    </div>
                    <div className="col-1"></div>
                </div>
            </section>
        </main>
    )
}

export default Contact;