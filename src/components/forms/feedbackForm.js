import FormHeading from "./formHeading";
import FormInput from "./formInputs";
import { useFormik } from "formik";
import NameInput from "./nameInput";
import { newNameInput, newFeedbackInput } from "../../utils/constants";
import {toast} from "react-toastify"
import { useState } from "react";

import VisibilityButton from "../shared/visibilityButton";
import * as Yup from "yup";
import SubmitButton from "../shared/submitBtn";

const FeedbackForm = () => {
  const [visibility, setVisibility] = useState(false);

  const visibilityChanger = () => {
    setVisibility(!visibility);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      thoughts: "",
      recommendations: "",
      experience: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      thoughts: Yup.string().required("Required"),
      recommendations: Yup.string().required("Required"),
      experience: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      toast.success('Thank You for your Feedback🥰.', {
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
        className="bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
flex-col text-white"
      >
        <div className="w-1/2 lg-w-full flex flex-col justify-center items-center">
          <VisibilityButton handler={visibilityChanger} label="Feedback Form" />
          {visibility ? (
            <>
              <FormHeading heading="Feedback Form" />
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
              {newFeedbackInput.map((el, i) => {
                return (
                  <FormInput
                    id={el.id}
                    name={el.id}
                    key={el.id}
                    label={el.label}
                    type={el.type}
                    handleChange={formik.handleChange}
                    value={formik.values[i + 2]}
                    placeholder={el.placeholder}
                    width={el.width}
                    error={formik.errors[el.id]}
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
    </form>
  );
};

export default FeedbackForm;
