import React from "react";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="container">
      <div className="detail">
        <div className="text">
          <h2>Meet Your Host - Alistair Schultz</h2>
          <p>
            With more than 15 years of experience covering both the FX and CFD
            markets, Alistair has extensive knowledge covering algorithmic
            trading, market analysis & an impressive educational background.
          </p>

          <p>
            As the author of ‘Essentials for Trading Students – An Overview of
            the Basics for Aspiring Traders’, which was released in 2017,
            Alistair will take any aspiring trader from the basics right through
            to advanced analytics used in institutional funds.
          </p>

          <p>
            At the core of Alistair’s teachings is the ability to help each
            trader uncover their ‘Trading DNA', helping them flourish with the
            skills and timeframes that work best for them.
          </p>
          <Link to="" className="btn-primary">
            See more
          </Link>
        </div>
        <div className="video">
          <div className="video-responsive">
            <iframe
            title="example"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PPDNjvHUdzQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
