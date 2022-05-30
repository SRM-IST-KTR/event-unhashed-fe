import styles from "./box.module.css";
import FormHeading from "./formHeading";
import FormInput from "./formInputs";
import { newNameInput, newRegistrationInputs } from "../../utils/constants";
import { toast } from "react-toastify";
import axios from "axios";

import { useFormik } from "formik";
import NameInput from "./nameInput";

import * as Yup from "yup";
import { useState } from "react";
import SubmitButton from "../shared/submitBtn";
import VisibilityButton from "../shared/visibilityButton";
import { getRecaptchaToken } from "../../utils/services/reCaptcha";

const RegistrationForm = () => {
  const [srmStudent, setSrmStudent] = useState(true);
  const [visibility, setVisibility] = useState(false);

  const radioButtonChangeHandler = () => {
    setSrmStudent(!srmStudent);
  };

  const visibilityChanger = () => {
    setVisibility(!visibility);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      regNumber: "",
      department: "",
      year: "",
      email: "",
      info: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().trim().required("Required"),
      lastName: Yup.string().required("Required"),
      contactNumber: Yup.number().min(10).required("Required"),
      regNumber: srmStudent
        ? Yup.string().required("Required")
        : Yup.string().trim(),
      department: srmStudent
        ? Yup.string().required("Required")
        : Yup.string().trim(),
      year: Yup.number().min(4).required("Required"),
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Required"),
      info: Yup.string().required("Required"),
    }),

    

    onSubmit: (values) => {
      try{
        const token = getRecaptchaToken();
        axios.post("http://bd8b-157-51-51-159.in.ngrok.io/api/v1/registration/register", {
            name: `${values.firstName} ${values.lastName}`,
            email: `${values.email}`,
            phone: `${values.contactNumber}`,
            yearOfGrad: `${values.year}`,
            regNo: `${values.regNumber}`,
            department: `${values.department}`,
          
        }, {
          'Content-Type': 'application/x-www-form-urlencoded' ,
          'token': `${token}` 
        }).then((response) => {
          console.log(response);
        } );
      toast.success("Registered Successfully! See you soon🥰.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(values);
    }
    catch (err) {
      console.log(err);
    }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className="text-[#fff] flex justify-center items-center 
  flex-col text-white"
      >
        <div className="w-[75%] lg:w-1/2 flex flex-col justify-center items-center">
          <VisibilityButton
            handler={visibilityChanger}
            label="Registration Form"
          />

          {visibility ? (
            <>
              <FormHeading heading="Event Registration" />
              <div className="w-full">
                <div className="text-xl py-4">
                  Full Name
                  <span className="text-[#ff0000]"> *</span>
                </div>
                <div className="flex justify-between">
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
                        width={el.width}
                        error={formik.errors[el.id]}
                      />
                    );
                  })}
                </div>
              </div>

              <FormInput
                id="contactNumber"
                name="contactNumber"
                key="contactNumber"
                label="Contact Number"
                type="text"
                handleChange={formik.handleChange}
                value={formik.values.contactNumber}
                placeholder="Contact Number"
                width="w-7/12"
                error={formik.errors.contactNumber}
              />

              <div className={`w-full m-10 ${styles.border}`}>
                <div className="w-full flex flex-col justify-center items-center p-10">
                  <div className="text-2xl font-semibold">
                    <input
                      type="radio"
                      value="SRM Student"
                      checked={srmStudent}
                      onClick={radioButtonChangeHandler}
                      onChange={radioButtonChangeHandler}
                      className="w-[20px] h-[20px] mr-5 bg-[#312658]"
                    />{" "}
                    For students of SRMIST
                  </div>
                  {srmStudent ? (
                    <>
                      <FormInput
                        id="regNumber"
                        name="regNumber"
                        key="regNumber"
                        label="Registration Number"
                        type="text"
                        handleChange={formik.handleChange}
                        value={formik.values.regNumber}
                        error={formik.errors.regNumber}
                        placeholder=""
                        width="w-full"
                      />
                      <FormInput
                        id="department"
                        name="department"
                        key="department"
                        label="Department (with specialisation)"
                        type="text"
                        handleChange={formik.handleChange}
                        value={formik.values.department}
                        error={formik.errors.department}
                        placeholder=""
                        width="w-full"
                      />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {newRegistrationInputs.map((el, i) => {
                return (
                  <FormInput
                    id={el.id}
                    name={el.id}
                    key={el.id}
                    label={el.label}
                    type={el.type}
                    handleChange={formik.handleChange}
                    value={formik.values[i + 5]}
                    placeholder={el.placeholder}
                    error={formik.errors[el.id]}
                    width={el.width}
                  />
                );
              })}

              <SubmitButton />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <script src="https://www.google.com/recaptcha/api.js?render=6LdmbiogAAAAAA40Pk15mIxLjr6OFSN27akiiyN-"></script>
    </form>
  );
};

export default RegistrationForm;
