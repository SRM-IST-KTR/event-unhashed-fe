import styles from "./box.module.css";
import FormHeading from "./formHeading";
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
          />

          <div className={`w-full m-10 ${styles.border}`}>
            <div className="w-full flex flex-col justify-center items-center p-10">
              <div className="text-2xl font-semibold">
                For students of SRMIST
              </div>
              <FormInput
                id="regNumber"
                name="regNumber"
                key="regNumber"
                label="Registration Number"
                type="text"
                handleChange={formik.handleChange}
                value={formik.values.regNumber}
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
                placeholder=""
                width="w-full"
              />
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
                width={el.width}
              />
            );
          })}

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
