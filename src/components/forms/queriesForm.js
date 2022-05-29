import FormHeading from "./formHeading";

import { MdEmail } from "react-icons/md";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useFormik } from "formik";
import { newNameInput, newQueriesInput } from "../../utils/constants";
import FormInput from "./formInputs";
import NameInput from "./nameInput";
import { toast } from "react-toastify";

const QueriesForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      doubt: "",
      email: "",
    },
    onSubmit: (values) => {
      toast.success("Query Submitted Successfully.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className="text-[#fff] flex justify-center items-center 
flex-col text-white"
      >
        <div className="mx-8 md:mx-0 md:w-1/2 lg-w-full flex flex-col justify-center items-center">
          <FormHeading heading="Queries Form" />
          <div className="w-full">
            <div className="text-xl py-4">
              Full Name
              <span className="text-[#ff0000]"> *</span>
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-4">
              {newNameInput.map((el, i) => {
                return (
                  <NameInput
                    id={el.id}
                    name={el.id}
                    key={el.id}
                    label={el.label}
                    type={el.type}
                    handleChange={formik.handleChange}
                    value={formik.values[i]}
                    placeholder={el.placeholder}
                    width="w-full md:w-6/12"
                  />
                );
              })}
            </div>
          </div>
          {newQueriesInput.map((el, i) => {
            return (
              <FormInput
                id={el.id}
                name={el.id}
                key={el.id}
                label={el.label}
                type={el.type}
                handleChange={formik.handleChange}
                value={formik.values[i]}
                placeholder={el.placeholder}
                width={el.width}
              />
            );
          })}
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

          <button
            className="m-10 w-64 py-5 text-2xl bg-[#7509C9] rounded-lg "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default QueriesForm;
