import FooterIcons from "./footerIcons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl from-[#403998] to-[#3F3F3F] h-40 text-white flex justify-evenly items-center">
      <div className="text-2xl font-bold">community@githubsrm.tech</div>
      <div className="text-2xl flex flex-col justify-center items-center">
        <div>Alone we can do so little, together we can do so much.</div>
        <div className="text-2xl font-bold">Github Community SRM</div>
      </div>
      <FooterIcons />
    </div>
  );
};

export default Footer;
