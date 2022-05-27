import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const FooterIcons = () => {
  return (
    <div className="text-5xl flex w-64 justify-around">
      <a
        href="mailto:community@githubsrm.tech"
        target="_blank"
        rel="noreferrer noopener"
      >
        <MdEmail />
      </a>
      <a
        href="https://twitter.com/GithubSrm"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillTwitterSquare />
      </a>
      <a
        href="https://www.instagram.com/githubsrm/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.linkedin.com/company/githubsrm/mycompany/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default FooterIcons;
