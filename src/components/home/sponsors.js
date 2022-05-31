import { Marquee } from "react-easy-marquee";

const Sponsors = () => {
  const sponsors = [
    {
      name: "CodeDamn",
      img: "http://levelupcollege.com/wp-content/uploads/2021/10/codedamn-logo-with-text-1.png",
      description:
        "Build projects, practice and learn to code from scratch - without leaving your browser.",
      url: "https://codedamn.com/",
    },
  ];

  return (
    <section id="sponsors" className="m-8 mx-auto">
      <h2 className="uppercase text-medium-turquoise text-3xl font-bold text-center">
        Sponsors
      </h2>

      <Marquee
        height="360px"
        width="85%"
        pauseOnHover={true}
        className="mx-auto my-8 p-8 gradientBox"
      >
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noreferrer noopener"
            className="p-4 text-base font-extrabold h-80 flex flex-col justify-between mx-12"
          >
            <figure className="flex flex-col mb-8 h-4/5">
              <img
                src={sponsor.img}
                alt={`${sponsor.name} | Unahashed | GitHub Community SRM`}
                className="mx-auto h-full"
              />
            </figure>

            <p className="text-xl font-semibold">{sponsor.description}</p>
          </a>
        ))}
      </Marquee>
    </section>
  );
};

export default Sponsors;
