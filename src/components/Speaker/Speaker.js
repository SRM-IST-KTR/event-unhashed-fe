import React, { useState } from "react";
import speakerImg from "../../assets/Gita.png";
import "./Speaker.css";

export default function Speaker() {
  const aboutSpeaker =
    "Gita Alekhya Paul is an undergraduate student at SRMIST, Kattankulathur.He is an MLH Fellowship alumni and contributor to popular repositories like Amazon AWS Amplify and Hoppscotch.Gita is a keen cybersecurity student, and is fond of making and breaking web applications. Ask him about Javascript, APIs, Hacking and Open-source!";

  return (
    <div className="mx-12 md:w-6/12 md:mx-auto">
      <h2 className="uppercase text-buttontext text-3xl font-bold text-center">
        Speaker
      </h2>

      <div className="hidden flex-row gap-4 mt-8 md:flex">
        <figure className="basis-1/5 md:2/5 flex flex-col ">
          <img
            src={speakerImg}
            className="rounded-full w-44 h-44 mx-auto"
          ></img>

          <div className="flex gap-2 mt-2 mx-auto">
            <a href="https://instagram.com/" target={"_blank"}>
              <i className="fa fa-instagram fa-2x"></i>
            </a>

            <a href="https://github.com/" target={"_blank"}>
              <i className="fa fa-brands fa-github fa-2x"></i>
            </a>

            <a href="https://twitter.com/" target={"_blank"}>
              <i className="fa fa-brands fa-twitter fa-2x"></i>
            </a>

            <a href="https://linked.com/" target={"_blank"}>
              <i className="fa fa-brands fa-linkedin fa-2x"></i>
            </a>
          </div>
        </figure>

        <p placeholder="aboutDetails" className="aboutSpeaker">
              {aboutSpeaker}
          </p>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 mt-8 md:hidden">
        <figure className="flex flex-col gap-4">
          <img
            src={speakerImg}
            className="rounded-full w-44 h-44 mx-auto"
          ></img>

          <p placeholder="aboutDetails" className="aboutSpeaker">
            {aboutSpeaker}
          </p>

          <div className="flex gap-2 mt-2 mx-auto">
            <a href="https://instagram.com/" target={"_blank"}>
              <i className="fa fa-instagram fa-2x"></i>
            </a>

            <a href="https://github.com/" target={"_blank"}>
              <i className="fa fa-brands fa-github fa-2x"></i>
            </a>

            <a href="https://twitter.com/" target={"_blank"}>
              <i className="fa fa-brands fa-twitter fa-2x"></i>
            </a>

            <a href="https://linked.com/" target={"_blank"}>
              <i className="fa fa-brands fa-linkedin fa-2x"></i>
            </a>
          </div>
        </figure>
      </div>
    </div>
  );
}
