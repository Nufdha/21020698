import React, { Fragment } from "react";

export function Home() {
  return (
    <Fragment>
      <div className="page-content-1">
        <div className="content-left">
          <div className="left-1" />
          <div className="left-2">
            I am<p>Nufdha</p>
          </div>
          <div className="left-3">From Sri Lanka</div>
          <div className="left-4">A software Engineer</div>
          <div className="left-5">
            <div className="left-btn-1">
              <a href="/contact">
                <button>Contact me</button>
              </a>
            </div>
            <div className="left-btn-2">
              <a href="/portfolio">
                <button>Browse portfolio</button>
              </a>
            </div>
          </div>
        </div>
        <div className="content-right">
          <img src={process.env.PUBLIC_URL + '/images/img01.png'} alt="my-img" />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
