import React from "react";

function Footer(){
    return(
        <footer className="container-fluid bg-light py-5">
        <div className="container pt-4">
            <div className="row mb-4">
                <div className="col-md-4">
                    <p className="py-2">
                        Thank you for your support and commitment to this sacred endeavor. Together, we will build a place where faith, culture, and community flourish.
                    </p>
                    <p><b>Email</b>: kd@tracytemple.org</p>
                    <p><b>Phone</b>: +1 (608) 381-5969</p>
                    <p><b>Address</b>: 11703 W Larch Rd, Tracy, CA 95304</p>
                </div>
                <div className="col-md-4 px-5">
                    <h2 className="fs-4 fw-bold pb-3 text-center">Information</h2>
                    <ul>
                        <li><span className="om">ॐ</span> Donation</li>
                        <li><span className="om">ॐ</span> Events</li>
                        <li><span className="om">ॐ</span> Pooja</li>
                        <li><span className="om">ॐ</span> Services</li>
                    </ul>
                </div>
                <div className="col-md-4 px-5">
                    <h2 className="fs-4 fw-bold pb-3 text-center me-5">Others</h2>
                    <ul>
                        <li><span className="om">ॐ</span> About</li>
                        <li><span className="om">ॐ</span> Contact</li>
                        <li><span className="om">ॐ</span> FAQ's</li>
                        <li><span className="om">ॐ</span> Shop</li>
                    </ul>
                </div>
            </div>
            <div className="row p-4 pb-5">
                <div className="col-md-4 m-auto text-left">
                    <p className="p-3 m-auto">Copyright &copy; Tracy Temple - 2024</p>
                </div>
                <div className="col-md-4 text-center">
                    <img src="./src/assets/img/Center@4x.png" alt="" className="p-3 footer-logo" width="200px"/>
                </div>
                <div className="col-md-4 m-auto text-center footer-icons">
                    <span><i className="fa-brands fa-square-x-twitter fs-3 px-3"></i></span>
                    <span><i className="fa-brands fa-linkedin fs-3 px-3"></i></span>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;