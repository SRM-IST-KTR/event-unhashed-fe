import React, { useState } from 'react';
import './About.css';
import { Location } from '../../utils/icons/Location';
import { Calendar } from '../../utils/icons/Calendar';

export default function About() {
  const about = 'Getting acquainted with emerging technologies is one of the ways to move ahead of your competitors, and Blockchain is at the top. GitHub Community SRM presents UNHASHED: Demystifying The Blockchain,a hands-on session superinteded by industry professionals, aimed at providing knowledge for better understanding, and developing Smart Contracts based on Zilliqa';

  return ( 
    <div className=" flex flex-col mx-12 md:w-6/12 md:mx-auto gradientBox my-16 ">
      <h2 className="uppercase text-buttontext text-3xl font-bold text-center">
        About
      </h2>
        <div className="about">
          <p placeholder="aboutDetails" className="aboutDetails">
              {about}
          </p>
        </div>
          <div className="aboutDetail">
              <div>
              <span className='inline-flex'><Calendar /><span class="icon-spacing mt-1">6th June 2022</span></span>
                <p className='mt-2 md:mt-3'><strong className='text-buttontext'>DURATION:</strong> 4-5 Hours</p>
              </div>
              <div>
                <span className='inline-flex'><Location /><span class="icon-spacing mt-1">TP Ganesan Auditorium</span></span>
                <p className='mt-2'><strong className='text-buttontext'>TIME:</strong> 12:30 pm - 5:30 pm</p>
              </div>
          </div>
    </div>
  );
}