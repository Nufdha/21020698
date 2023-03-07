import React, { Fragment } from "react";

export function Portfolio() {
  return (
    <Fragment>
        <div className="page-content-3">

            <div className="content3-1">
                <div className="heading">Portfolio.</div>
                <div className="line"></div>
            </div>

            <div className="content3-2">

                <div className="imgset">

                    <div className="img-1">
                        <img src={process.env.PUBLIC_URL + "/images/img03.png"} alt="img-3" />
                    </div>

                    <div className="txt-1">Mobile Applications
                    </div>

                </div>

                <div className="imgset">

                    <div className="img-1">
                        <img src={process.env.PUBLIC_URL + "/images/img04.png"} alt="img-4" />
                    </div>

                    <div className="txt-1">Ui &amp; UX Designing
                    </div>

                </div>

                <div className="imgset">

                    <div className="img-1">
                        <img src={process.env.PUBLIC_URL + "/images/img05.png"} alt="img-5" />
                    </div>

                    <div className="txt-1">Web development
                    </div>
                </div>    
            </div>
            <div className="content3-3">
                    <a href="#">
                    <button>Learn More</button>
                    </a>
            </div>
        </div>
    </Fragment>
  );
}

export default Portfolio;
