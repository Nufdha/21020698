import React, { Fragment } from "react";

export function Contact() {
  return (
    <Fragment>
      <div className="page-content-2">
        <div className="content-left-2" style={{ width: "26%" }}>
          <img src={process.env.PUBLIC_URL + "/images/img06.png"} alt="./design-1" />
        </div>
        <div className="content-right-2">
          <div className="right-1">Contact me</div>
          <div className="right-2" />
          <div className="right-3" style={{ marginLeft: "40px" }}>
            <br />
            <p>
              Email : sample@gmail.com <br />
              <br />
              Mobile : +(94) 76 4567654 <br />
              <br />
              Address : 234/4, Main Road,Thimbirigasyaya, Sri Lanka.
            </p>
          </div>
          <div className="right-4" style={{ marginLeft: "-30px" }}>
            <div className="left-btn-2">
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;