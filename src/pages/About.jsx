import React from "react";

function About(){
    return(
        <div className="container-fluid p-0">
            <div className="breadcrumb container-fluid">
                <div className="container p-5">
                    <div className="container">
                        <h1 className="display-4 text-white fw-bolder p-5">About us</h1>
                    </div>
                </div>
                <div className="container breadcrum-text">
                    <p className="d-inline p-3 fs-6 bg-light">Home <span className="px-1">ॐ</span> About</p>
                </div>
            </div>
            
            <section className="container p-5">
                <div className="row">
                    <div className="col-md-6 p-4">
                        <img src="./src/assets/img/Ammavaru@4x.png" className="img-fluid p-5" alt="" />
                    </div>
                    <div className="col-md-6 p-4 my-auto">
                        <h2 className="fs-4">Welcome to Kanaka Durga Temple</h2>
                        <h5 className="fs-6" style={{color: "#7E4555"}}>Building a Sacred Space in Tracy, CA</h5>
                        <p>
                            We are excited to announce the upcoming construction of the Kanaka Durga Temple in Tracy, CA. This new temple will be a beacon of spirituality and community, designed meticulously according to the ancient principles of Agama Shastra.
                        </p>
                        <h2 className="fs-4 pb-2"><i className="fa-solid fa-share"></i> Our Vision:</h2>
                        <p>
                            Our mission is to create a serene and sacred environment where devotees can connect with the divine presence of Kanaka Durga. Every aspect of the temple, from its architectural design to its ritual practices, will adhere to the time-honored traditions outlined in Agama Shastra. This dedication ensures that our temple will be a place of profound spiritual significance and authenticity.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mb-5">
                <div className="row p-4 cta-about mx-5" style={{backgroundColor: "#9A031E"}}>
                    <div className="col-7">
                        <h2 className="fs-6 p-3 text-white">
                            Your contributions will directly support the construction and development of the Kanaka Durga Temple, helping us create a lasting spiritual legacy
                        </h2>
                    </div>
                    <div className="col-5 p-3 text-center">
                        <a href="#" className="btn btn-secondary btn-lg">Donate now <i className="fa-solid fa-chevron-right text-white"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
    
}

export default About;