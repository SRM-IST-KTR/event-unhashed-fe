import { GitHub, Instagram, Linkedin, Twitter } from "../../utils/icons";

const Speaker = () => {
  return (
    <section
      id="speakers"
      className="mx-5 w-11/12 md:mt-10 md:mx-auto max-w-4xl "
    >
      <h2 className="uppercase text-medium-turquoise text-3xl font-bold text-center">
        Speaker
      </h2>

      <div className="flex md:flex-row flex-col justify-center items-center gap-8">
        <div className="flex flex-col items-center gap-8 mt-8">
          <figure>
            <img
              src="https://github.com/gitaalekhyapaul.png"
              className="rounded-lg w-48 h-48 mx-auto object-cover"
              alt="Unhashed | GitHub Community SRM"
            />
          </figure>

          <figcaption>
            <div className="flex gap-2 mt-2 mx-auto">
              <a
                href="https://www.instagram.com/gitaalekhyapaul/"
                target="_blank"
                rel="noreferrer noopener"
                className="h-7"
              >
                <Instagram />
              </a>

              <a
                href="https://github.com/gitaalekhyapaul"
                target="_blank"
                rel="noreferrer noopener"
                className="h-7"
              >
                <GitHub />
              </a>

              <a
                href="https://twitter.com/gitaalekhyapaul"
                target="_blank"
                rel="noreferrer noopener"
                className="h-7"
              >
                <Twitter />
              </a>

              <a
                href="https://www.linkedin.com/in/gitaalekhyapaul/"
                target="_blank"
                rel="noreferrer noopener"
                className="h-7"
              >
                <Linkedin />
              </a>
            </div>
          </figcaption>
        </div>

        <p className="italic font-medium text-xl w-full p-5 md:p-0 text-center md:text-left">
          Gita Alekhya Paul is an undergraduate student at SRMIST,
          Kattankulathur.He is an MLH Fellowship alumni and contributor to
          popular repositories like Amazon AWS Amplify and Hoppscotch. Gita is a
          keen cybersecurity student, and is fond of making and breaking web
          applications. Ask him about Javascript, APIs, Hacking and Open-source!
        </p>
      </div>
    </section>
  );
};

export default Speaker;
