import React, { Fragment } from "react";

export function About() {
  return (
    <Fragment>
      <div className="page-content-2">

        <div className="content-left-2">
          <img src={process.env.PUBLIC_URL + "/images/img02.png"} alt="./design-1"/>
        </div>

        <div className="content-right-2">

          <div className="right-1">About me
          </div>

          <div className="right-2" />

            <div className="right-3">
                <p>
                Dedicated self-motivated and highly reliable first year
                undergraduate at University of Colombo School of Computing,
                aspiring to work as a Software Engineer intern in a well-reputed
                company. I have developed good analytical and problem solving
                skills and I can use my experience, skills and knowledge to learn
                new things and to excel in my career.
                </p>
            </div>

            <div className="right-4">
                <div className="left-btn-2">
                    <a href="./page_education.html">
                        <button>Education</button>
                    </a>
                </div>
           
                <div className="left-btn-2">
                    <a href="./page_certifications.html">
                        <button>Certification</button>
                     </a>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;