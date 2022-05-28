import FormHeading from "./formHeading";
import Input from "./formInput";
import { MdEmail } from "react-icons/md";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const QueriesForm = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
flex-col text-white"
    >
      <div className="w-1/2 lg-w-full flex flex-col justify-center items-center">
        <FormHeading heading="Queries Form" />
        <Input label="Full Name">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-[47%]"
            placeholder="First Name"
          />
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-[47%]"
            placeholder="Last Name"
          />
        </Input>

        <Input label="Doubts">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full"
          />
        </Input>

        <Input label="E - mail">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full"
          />
        </Input>
        <div className="w-full flex flex-col">
          <div className="text-xl py-4">
            Reach us at
            <span className="text-[#ff0000]"> *</span>
          </div>
          <div className="text-6xl flex justify-evenly">
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
        </div>

        <button className="m-10 w-64 py-5 text-2xl bg-[#7509C9] rounded-lg ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default QueriesForm;
