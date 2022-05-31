import { MdEmail } from "react-icons/md";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const socials = [
    {
      icon: <MdEmail />,
      url: "mailto:community@githubsrm.tech",
    },
    {
      icon: <AiFillTwitterSquare />,
      url: "https://twitter.com/GithubSrm",
    },
    {
      icon: <AiFillInstagram />,
      url: "https://www.instagram.com/githubsrm/",
    },
    {
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/company/githubsrm/mycompany/",
    },
  ];

  return (
    <footer className="flex justify-evenly items-center lg:flex-row flex-col text-lg p-4 text-center">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="mailto:community@githubsrm.tech"
        className="font-bold hidden lg:block"
      >
        community@githubsrm.tech
      </a>

      <div className="flex flex-col justify-evenly lg:justify-center items-center h-40">
        <p className="font-light">
          Alone we can do so little, together we can do so much.
        </p>
        <a
          href="https://githubsrm.tech/"
          className="font-extrabold"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github Community SRM
        </a>

        <a
          href="mailto:community@githubsrm.tech"
          className="font-normal block lg:hidden"
          target="_blank"
          rel="noreferrer noopener"
        >
          community@githubsrm.tech
        </a>
      </div>

      <div className="text-5lg flex w-64 justify-around">
        {socials.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer noopener">
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
