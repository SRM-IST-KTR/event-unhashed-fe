import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const FooterIcons = () => {
  return (
    <div className="text-5xl flex w-64 justify-around">
      <a href="mailto:community@githubsrm.tech">
        <MdEmail />
      </a>
      <a href="https://twitter.com/GithubSrm">
        <AiFillTwitterSquare />
      </a>
      <a href="https://www.instagram.com/githubsrm/">
        <AiFillInstagram />
      </a>
      <a href="https://www.linkedin.com/company/githubsrm/mycompany/">
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default FooterIcons;
