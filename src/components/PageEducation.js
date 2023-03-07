import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export function PageEducation() {
  return (
    <Fragment>
      <div className="page-content-4">
        <div className="content-4-img">
          <img src={process.env.PUBLIC_URL + "/images/img07.png"} alt="img-7" />
        </div>
        <div className="content-4">
          <div className="content4-1 content3-1">
            <div className="heading">Education.</div>
            <div className="line" />
          </div>
          <div className="content-4-txt">
            <br />
            <p>
              1. Successfully completed G.C.E Ordinary Level Examination in 2017
              <br />
              <br />
              2. Successfully completed G.C.E Advanced Level Examination in 2020
              <br />
              <br />
              3. Undergraduate Student at University of Colombo School of
              Computing
            </p>
          </div>
        </div>
        <div className="content3-3 content4-4">
          <Link to="/page_certification">
            <button>Certifications </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default PageEducation;
