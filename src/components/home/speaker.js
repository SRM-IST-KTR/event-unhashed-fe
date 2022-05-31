const Speaker = () => {
  return (
    <section id="speakers" className="mx-12 md:w-6/12 md:mx-auto">
      <h2 className="uppercase text-medium-turquoise text-3xl font-bold text-center">
        Speaker
      </h2>

      <div className="flex items-center gap-8">
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
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-brands fa-instagram fa-3x"></i>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-brands fa-github fa-3x"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-brands fa-twitter fa-3x"></i>
              </a>

              <a
                href="https://linked.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-brands fa-linkedin fa-3x"></i>
              </a>
            </div>
          </figcaption>
        </div>

        <p className="italic font-medium text-xl">
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
