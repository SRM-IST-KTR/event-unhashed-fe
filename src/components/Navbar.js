import srm from "../utils/icons/srm.png";
import gcsrmLogo from "../utils/icons/gcsrmLogo.png";
import { useState } from "react";

export const Navbar = () => {
  const links = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Speakers",
    },
    {
      name: "Sponsors",
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  const showMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      {/* Table and Desktop Navbar */}
      <nav className=" h-32 justify-evenly pt-2 hidden md:flex">
        <figure className="my-auto">
          <img src={srm} alt="SRM Logo" className="max-h-24" />
        </figure>

        <div className="flex justify-evenly md:space-x-1 lg:space-x-8 mx-8 my-auto">
          {links.map((navBut) => (
            <button className="bg-buttonbg md:px-8 lg:px-12 pb-1 rounded-lg font-semibold text-buttontext h-10 hover:scale-125 transition-all ">
              {navBut.name}
            </button>
          ))}
        </div>

        <figure className="my-auto">
          <img src={gcsrmLogo} alt="GCSRM Logo" className="h-20" />
        </figure>
      </nav>

      {/* Mobile Hamburger Menu */}
      <nav className="bg-[#000000] md:hidden flex items-center h-32 relative ">
        <button
          className="outline-none mobile-menu-button absolute left-10 top-10"
          onClick={() => showMenu()}
        >
          <svg
            width="36"
            height="32"
            viewBox="0 0 36 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.8047 0.409424H0.351562C0.158203 0.409424 0 0.567627 0 0.760986V3.57349C0 3.76685 0.158203 3.92505 0.351562 3.92505H34.8047C34.998 3.92505 35.1562 3.76685 35.1562 3.57349V0.760986C35.1562 0.567627 34.998 0.409424 34.8047 0.409424ZM34.8047 27.8313H0.351562C0.158203 27.8313 0 27.9895 0 28.1829V30.9954C0 31.1887 0.158203 31.3469 0.351562 31.3469H34.8047C34.998 31.3469 35.1562 31.1887 35.1562 30.9954V28.1829C35.1562 27.9895 34.998 27.8313 34.8047 27.8313ZM34.8047 14.1204H0.351562C0.158203 14.1204 0 14.2786 0 14.4719V17.2844C0 17.4778 0.158203 17.636 0.351562 17.636H34.8047C34.998 17.636 35.1562 17.4778 35.1562 17.2844V14.4719C35.1562 14.2786 34.998 14.1204 34.8047 14.1204Z"
              fill="#29CCC4"
            />
          </svg>
        </button>

        <figure className="flex my-auto absolute right-20 top-10 gap-4">
          <img src={srm} alt="SRM Logo" className="h-12" />
          <img src={gcsrmLogo} alt="GCSRM Logo" className="h-12" />
        </figure>
      </nav>

      {/* Mobile Hamburger Menu */}
      {navbarOpen && (
        <div className="z-50">
          <ul className="flex flex-col gap-8 py-8 text-white mx-auto  absolute top-[6rem] bg-node-black w-full transition-all duration-500 bg-buttonbg">
            {links.map((link) => (
              <a >
                <li key={link.name}>
                  <a className="ml-4 text-[#FFFFFF]">{link.name}</a>
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
