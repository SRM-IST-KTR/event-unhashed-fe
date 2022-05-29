import React from "react";
// import speakerImg from "../../assets/Gita.png";
import speakerImg from "../../utils/icons/GitaPortrait.jpeg";
import "./Speaker.css";

export default function Speaker() {
  const aboutSpeaker = (
    <p className="aboutSpeaker text-left">
      Gita Alekhya Paul is an undergraduate student at SRMIST, Kattankulathur.He
      is an{" "}
      <a
        href="https://fellowship.mlh.io/"
        target={"_blank"}
        rel="noreferrer"
        className="text-buttontext"
      >
        MLH Fellowship
      </a>{" "}
      alumni and contributor to popular repositories like{" "}
      <a
        href="https://aws.amazon.com/amplify/"
        target={"_blank"}
        rel="noreferrer"
        className="text-buttontext"
      >
        Amazon AWS Amplify
      </a>{" "}
      and {" "}
      <a
        href="https://hoppscotch.io/"
        target={"_blank"}
        rel="noreferrer"
        className="text-buttontext"
      >
      Hoppscotch
      </a>
      . Gita is a keen cybersecurity student, and is fond of making
      and breaking web applications. Ask him about Javascript, APIs, Hacking and
      Open-source!
    </p>
  );
  return (
    <section id="speakers" className="mx-12 md:w-6/12 md:mx-auto">
      <h2 className="uppercase text-buttontext text-3xl font-bold text-center">
        Speaker
      </h2>

      {/* Desktop Layout */}
      <div className="hidden flex-row gap-0 mt-8 lg:flex">
        <figure className=" flex flex-col flex-grow w-44 pt-4">
          <img
            src={speakerImg}
            className="rounded-lg w-auto h-48 mx-auto object-cover"
            alt="Speaker"
          ></img>

          <div className="flex gap-2 mt-2 mx-auto">
            <a href="https://instagram.com/" target={"_blank"} rel="noreferrer">
              <i className="fa fa-brands fa-instagram fa-3x"></i>
            </a>

            <a href="https://github.com/" target={"_blank"} rel="noreferrer">
              <i className="fa fa-brands fa-github fa-3x"></i>
            </a>

            <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
              <i className="fa fa-brands fa-twitter fa-3x"></i>
            </a>

            <a href="https://linked.com/" target={"_blank"} rel="noreferrer">
              <i className="fa fa-brands fa-linkedin fa-3x"></i>
            </a>
          </div>
        </figure>

        {aboutSpeaker}
      </div>

      {/* Tablet Layout */}
      <div className="flex flex-col gap-4 mt-8 lg:hidden">
        <figure className="flex flex-col gap-4">
          <img
            src={speakerImg}
            className="rounded-full w-44 h-44 mx-auto object-cover"
            alt="Speaker"
          ></img>

          <p className="aboutSpeaker text-center">{aboutSpeaker}</p>

          <div className="flex gap-2 my-2 mx-auto">
            <a href="https://instagram.com/" target={"_blank"} rel="noreferrer">
              <i className="fa fa-instagram fa-4x"></i>
            </a>

            <a href="https://github.com/" target={"_blank"} rel="noreferrer">
              <i className="fa fa-brands fa-github fa-3x"></i>
            </a>

            <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
              <i className="fa fa-brands fa-twitter fa-3x"></i>
            </a>

            <a href="https://linked.com/" target={"_blank"} rel="noreferrer">
              <i className="fa fa-brands fa-linkedin fa-3x"></i>
            </a>
          </div>
        </figure>
      </div>
    </section>
  );
}
