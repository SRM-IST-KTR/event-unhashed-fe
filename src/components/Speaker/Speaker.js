import React, { useState } from 'react';
import speakerImg from '../../assets/Gita.png';
import './Speaker.css';

export default function SignIn() {
  const aboutSpeaker = 'Gita Alekhya Paul is an undergraduate student at SRMIST,Kattankulathur.He is an MLH Fellowship alumni and contributor to popular repositories like Amazon AWS Amplify and Hoppscotch.Gita is a keen cybersecurity student, and is fond of making and breaking web applications. Ask him about Javascript, APIs, Hacking and Open-source!';

  return (
    <div className="speakerOuterContainer">
      <div className="speakerInnerContainer">
        <h1 className="heading">SPEAKER</h1>
        <div className="speaker">
          <div className="speakerImg">
          ` <img src={speakerImg}></img>
            <div className='speakerMedia'>
              <a href="https://instagram.com/" target={'_blank'}><i className="fa fa-instagram"></i></a>
              <a href="https://github.com/" target={'_blank'}><i className="fa fa-brands fa-github"></i></a>
              <a href="https://twitter.com/" target={'_blank'}><i className="fa fa-brands fa-twitter"></i></a>
              <a href="https://linked.com/" target={'_blank'}><i className="fa fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <p placeholder="SpeakerDetails" className="speakerDetails">
              {aboutSpeaker}
          </p>
        </div>
      </div>
    </div>
  );
}