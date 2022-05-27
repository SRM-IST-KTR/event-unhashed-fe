import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const FooterIcons = () => {
  return (
    <div className="text-5xl flex w-64 justify-around">
      <MdEmail />
      <AiFillTwitterSquare />
      <AiFillInstagram />
      <AiFillLinkedin />
    </div>
  );
};

export default FooterIcons;
