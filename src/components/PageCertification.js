import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export function PageCertification() {
  return (
    <Fragment>
      <div className="page-content-4">
        <div className="content-5-img">
          <img src={process.env.PUBLIC_URL + "/images/img08.png"} alt="img-8" />
        </div>
        <div className="content-4">
          <div className="content4-1 content3-1">
            <div className="heading">Certifications.</div>
            <div className="line" />
          </div>
          <div className="content-4-txt">
            <br />
            <p>
              1. Diploma in English <br />
              Esoft Metro Campus 2018
              <br />
              <br />
              2. Diploma in Information Technology <br />
              Esoft Metro Campus 2018
            </p>
          </div>
        </div>
        <div className="content3-3 content4-4">
          <Link to="/page_education">
            <button>Education &gt;</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default PageCertification;
