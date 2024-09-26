import React from "react";


function Home(){
    return(
        <main>
          <section className="container-fluid p-0 heroset">
            <div className="container p-5">
              <div id="carouselExampleCaptions mt-5" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item d-block active bg-slide rounded my-4">
                    <div className="row p-5">
                      <div className="col-5">
                        <img src="./src/assets/img/Ammavaru@4x.png" className="img-fluid w-75" alt="" />
                      </div>
                      <div className="col-7 px-5">
                        <div className="p-5 mt-5 rounded" style={{backgroundColor: "#9a031e"}}>
                          <h2 className="fw-bolder display-6 text-white">Durga Devi Give us <br />Power to Believe</h2>
                        <p className="text-white fs-5">Every religion in its own tradition builds houses of worship. It is the mandir that fuels our faith in God, strengthen.</p>
                        <button type="button" className="btn btn-outline-light btn-lg">Donate Now</button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item rounded my-4">
                    <div className="row p-5">
                      <div className="col-5">
                        <img src="./src/assets/img/Ammavaru@4x.png" className="img-fluid w-75" alt="" />
                      </div>
                      <div className="col-7 px-5">
                        <div className="p-5 mt-5 rounded" style={{backgroundColor: "#7e4555"}}>
                          <h2 className="fw-bolder display-6 text-white">Welcome to <br />Kanaka Durga Temple</h2>
                        <p className="text-white fs-5">We are Building Our Durga Temple in a Sacred Space in Tracy, CA</p>
                        <button type="button" className="btn btn-outline-light btn-lg">Donate Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </section>

          <section className="container p-5">
              <div className="row">
                  <div className="col-md-6 p-4">
                      <img src="./src/assets/img/Image-4@4x-2048x1272.png" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6 p-4 my-auto">
                      <h2>A Divine Vision</h2>
                      <p>
                          Our mission is to create a serene and sacred environment where devotees can connect with the divine presence of Kanaka Durga. Every aspect of the temple, from its architectural design to its ritual practices, will adhere to the time-honored traditions outlined in Agama Shastra. This dedication ensures that our temple will be a place of profound spiritual significance and authenticity.
                      </p>
                  </div>
              </div>
          </section>

          <section className="container-fluid p-5 bg-light">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 p-4 my-auto">
                          <h2>Why We Need Your Support</h2>
                          <p>
                              Constructing a temple of this magnitude requires significant resources, and we are reaching out to the community for support. Your generous donations will help bring this sacred vision to life and ensure that the temple serves as a spiritual home for generations to come.
                          </p>
                          <h3 className="fs-5">How Your Contribution Helps:</h3>
                          <ul>
                              <li><i className="fa-regular fa-hand-point-right"></i> <b>Architectural Excellence:</b> Support the construction of a temple built with precision and reverence for Agama principles.</li>
                              <li><i className="fa-regular fa-hand-point-right"></i> <b>Enrichment:</b> Fund the creation of spaces for worship, festivals, and educational programs that celebrate and preserve our heritage.</li>
                              <li><i className="fa-regular fa-hand-point-right"></i> <b>Community Impact:</b> Assist in building a welcoming environment for spiritual growth and community unity.</li>
                          </ul>
                      </div>
                      <div className="col-md-6 p-4 text-center">
                          <img src="./src/assets/img/Image-2@4x.png" width="250px" className="img-fluid p-3" alt="" />
                      </div>
                  </div>
              </div>
          </section>

          <section className="container p-5">
              <div className="row">
                  <div className="col-md-6 p-4">
                      <img src="./src/assets/img/Image-1@4x-2048x1879.png" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6 p-4 my-auto">
                      <h2>Donate Today</h2>
                      <p>
                          Your contributions will directly support the construction and development of the Kanaka Durga Temple, helping us create a lasting spiritual legacy.
                      </p>
                      <a href="#" className="btn btn-primary">Donate now <i className="fa-solid fa-chevron-right text-white"></i></a>
                  </div>
              </div>
          </section>

          <section className="container-fluid p-5 bg-light">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 p-4 my-auto">
                          <h2>Get Involved</h2>
                          <p>
                              There are many ways to be a part of this divine project beyond making a financial donation. We welcome volunteers, sponsorships, and community partnerships to help bring the Kanaka Durga Temple to fruition.
                          </p>
                          <h3 className="fs-5">How Your Contribution Helps:</h3>
                          <ul>
                              <li><i className="fa-regular fa-hand-point-right"></i> Volunteer Opportunities</li>
                              <li><i className="fa-regular fa-hand-point-right"></i> Sponsorship Information</li>
                              <li><i className="fa-regular fa-hand-point-right"></i> Community Partnerships</li>
                          </ul>
                      </div>
                      <div className="col-md-6 p-4">
                          <img src="./src/assets/img/Image-4@4x-2048x1272.png" className="img-fluid" alt="" />
                      </div>
                  </div>
              </div>
          </section>
          
          <section className="container p-5">
              <div className="row">
                  <div className="col-md-6 p-4">
                      <img src="./src/assets/img/Image-5@4x.png" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6 p-4 my-auto">
                      <h2>Stay Connected</h2>
                      <p>
                          Keep up with the latest updates on the temple’s construction and upcoming events. Follow us on social media and subscribe to our newsletter for news and opportunities to engage.
                      </p>
                  </div>
              </div>
          </section>
        </main>
    )
}

export default Home;