import Input from "./nameInput";
import styles from "./box.module.css";
import FormHeading from "./formHeading";
import { useState } from "react";
import FormInput from "./formInputs";
import { newNameInput, newRegistrationInputs } from "../../utils/constants";

import { useFormik } from "formik";
import NameInput from "./nameInput";

const RegistrationForm = () => {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className="bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
  flex-col text-white"
      >
        <div className="w-1/2 flex flex-col justify-center items-center">
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
                  />
                );
              })}
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
                value={formik.values[i]}
                placeholder={el.placeholder}
                width={el.width}
              />
            );
          })}

          {/* <Input label="Full Name">
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

          <FormInput
            label="Contact Number"
            type="text"
            placeholder="Contact Number"
            width="w-7/12"
          />

          <div className={`w-full m-10 ${styles.border}`}>
            <div className="w-full flex flex-col justify-center items-center p-10">
              <div className="text-2xl font-semibold">
                For students of SRMIST
              </div>
              <Input label="Registration Number">
                <input
                  type="text"
                  className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full"
                />
              </Input>
              <Input label="Department (with specialisation)">
                <input
                  type="text"
                  className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full"
                />
              </Input>
            </div>
          </div>

          <Input label="Year of graduation">
            <input
              type="text"
              className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-4/12"
            />
          </Input>

          <Input label="College email-id">
            <input
              type="text"
              className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-7/12"
            />
          </Input>

          <Input label="Where did you hear about the event">
            <input
              type="text"
              className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-7/12"
            />
          </Input> */}

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

export default RegistrationForm;
