import * as Yup from "yup";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import { Input } from "../../shared";
import { FEEDBACK_INPUTS } from "../../../utils/constants";
import { postRegistration } from "../../../utils/services/rest";

import { useState } from "react";
import { Loader } from "../../../utils/icons";
import { Toast } from "../../../utils/functions";

const FeedbackForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    thoughts: "",
    exp_gained: "",
    recommendations: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Required"),
    thoughts: Yup.string()
      .trim()
      .min(30, "Minimum 30 characters Required")
      .required("Required"),
    exp_gained: Yup.string()
      .trim()
      .min(30, "Minimum 30 characters Required")
      .required("Required"),
    recommendations: Yup.string()
      .min(30, "Minimum 30 characters Required")
      .required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      console.log(values);
      await postRegistration(values);
      toast.success("Registered Successfully! See you soon 🥰", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      resetForm();
    } catch (err) {
      console.log(err);
      Toast(false, "Uh oh! We are facing some issues. Please again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors }) => (
        <Form className="flex justify-center items-center flex-col text-white">
          <div className="w-10/12 lg:w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-medium-turquoise bg-indigo-dye py-5 px-10 text-3xl rounded-xl font-semibold m-10">
              Feedback Form
            </h2>

            <div className="flex flex-wrap justify-between w-full">
              {FEEDBACK_INPUTS.map((input) => (
                <div key={input.name} className="flex flex-col w-full">
                  <Input key={input.name} {...input} />
                  {
                    <span className="text-red-500 font-semibold">
                      {touched[input.name]
                        ? errors[input.name]
                          ? errors[input.name]
                          : "\u00A0"
                        : "\u00A0"}
                    </span>
                  }
                </div>
              ))}
            </div>

            <button
              className="px-6 py-2 w-28 text-center text-lg bg-french-violet capitalize rounded text-white font-bold"
              type="submit"
              disabled={loading}
            >
              {!loading ? "Submit" : <Loader />}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
