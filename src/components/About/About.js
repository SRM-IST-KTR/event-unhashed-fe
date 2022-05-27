import React, { useState } from 'react';
import './About.css';

export default function About() {
  const about = 'Getting acquainted with emerging technologies is one of the ways to move ahead of your competitors, and Blockchain is at the top. GitHub Community SRM presents UNHASHED: Demystifying The Blockchain,a hands-on session superinteded by industry professionals, aimed at providing knowledge for better understanding, and developing Smart Contracts based on Zilliqa';

  return (
    <div className="aboutOuterContainer">
      <div className="aboutInnerContainer">
        <h1 className="heading">ABOUT</h1>
        <div className="about">
          <p placeholder="aboutDetails" className="aboutDetails">
              {about}
          </p>
        </div>
          <div className="aboutDetail">
              <div>
                <i class="fa fa-calendar"><span class="icon-spacing">6th June 2022</span></i>
                <p><strong>DURATION:</strong> 4-5 Hours</p>
              </div>
              <div>
                <i class="fa fa-map-marker marker"><span class="icon-spacing">TP Ganesan Auditorium</span></i> 
                <p><strong>TIME:</strong> 12:30 pm - 5:30 pm</p>
              </div>
          </div>
        </div>
    </div>
  );
}