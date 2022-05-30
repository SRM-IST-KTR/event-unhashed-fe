import FooterIcons from "./footerIcons";

const Footer = () => {
  return (

    <div className="text-[#fff] h-64 xl:h-40 text-white flex justify-evenly items-center xl:flex-row flex-col text-xl lg:text-2xl p-5 text-center">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="mailto:community@githubsrm.tech"
        className="font-bold hidden xl:block"
      >
        community@githubsrm.tech
      </a>
      <div className="flex flex-col justify-evenly xl:justify-center items-center h-40">
        <p className="font-light">Alone we can do so little, together we can do so much.</p>
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
          className="font-normal block xl:hidden"
          target="_blank"
          rel="noreferrer noopener"
        >
          community@githubsrm.tech
        </a>
      </div>
      <FooterIcons />
    </div>
  );
};

export default Footer;
