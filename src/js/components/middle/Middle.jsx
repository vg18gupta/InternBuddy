import React from 'react';
import Discover from '../discover/Discover';
import Hero from '../hero/HeroImage';
const Middle = () => (
  <div>
    <Hero style={'middle-img'} />
    <div id="middle">
      <div className="middleSection">
        <div>
          <h2 className="middleH2">Fullstack Developer</h2>
          <div className="yellowBox" />
          <p className="middleP">
            At Intern Buddy, 
          </p>
          <p className="middleP">
            We know that learning is enhanced ............
          </p>
        </div>
        <div className="middleImg" />
        <div>
          <h2 className="middleH2">Features</h2>
          <div className="yellowBox" />
          <p className="middleP">
            Recognizing individual dierences and establishing clear learning
            pathways ............
          </p>
          <p className="middleP">
            Above all , our goal is to educate and grow students who ..........
          </p>
        </div>
      </div>
    </div>
    <div className="clear">
      <Discover />
    </div>
  </div>
);

export default Middle;
