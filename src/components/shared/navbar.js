import { GCSRMLogo, UnhashedLogo } from "../../utils/images";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Speakers",
      url: "#speakers",
    },
    {
      name: "Sponsors",
      url: "#sponsors",
    },
  ];

  return (
    <nav className="sticky z-50 top-0 bg-gradient-to-r from-black to-russian-violet h-32 justify-evenly py-4 hidden md:flex">
      <figure className="my-auto h-full">
        <img
          src={UnhashedLogo}
          alt="Unhashed | GitHub Community SRM"
          className="h-full"
        />
      </figure>

      <div className="flex justify-evenly lg:space-x-8 mx-8 my-auto">
        {links.map((navBut) => (
          <a
            key={navBut.url}
            href={navBut.url}
            className="bg-indigo-dye rounded-lg text-medium-turquoise py-2 w-36 hover:scale-125 transition-all text-center font-semibold"
          >
            {navBut.name}
          </a>
        ))}
      </div>

      <figure className="my-auto h-full">
        <a
          href="https://githubsrm.tech"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={GCSRMLogo} alt="GitHub Community SRM" className="h-full" />
        </a>
      </figure>
    </nav>
  );
};

export default Navbar;
