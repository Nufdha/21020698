import React, { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
        <div className="navbar">
            <div className="nav-links">
                    
                <Link to="/">Home</Link>

                <Link to="/about">About
                </Link>

                <Link to="/portfolio">Portfolio
                </Link>

                <Link to="/page_education">Pages
                </Link>

            </div>

            <div className="contact-btn">

                <Link to="/contact">
                    <button>Contact</button>
                </Link>
                
            </div>
        </div>
    </Fragment>
  );
}

export default Navbar;







