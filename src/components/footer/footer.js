import FooterIcons from "./footerIcons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl from-[#403998] to-[#3F3F3F] h-40 text-white flex justify-evenly items-center text-2xl">
      <a href="mailto:community@githubsrm.tech" className="font-bold">
        community@githubsrm.tech
      </a>
      <div className="flex flex-col justify-center items-center">
        <div>Alone we can do so little, together we can do so much.</div>
        <a href="https://githubsrm.tech/" className="font-bold">
          Github Community SRM
        </a>
      </div>
      <FooterIcons />
    </div>
  );
};

export default Footer;
