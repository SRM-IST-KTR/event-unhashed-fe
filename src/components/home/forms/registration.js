import { useState } from "react";
import * as Yup from "yup";
import "yup-phone";
import { Formik, Form } from "formik";

import { Input } from "../../shared";
import { REGISTRATION_INPUTS } from "../../../utils/constants";
import { postRegistration } from "../../../utils/services/rest";
import { Loader } from "../../../utils/icons";
import { Toast } from "../../../utils/functions";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    regNo: "",
    department: "",
    yearOfGrad: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string("Invalid input type.").trim().required("Required."),
    lastName: Yup.string("Invalid input type.").required("Required."),
    email: Yup.string("Invalid input type.")
      .trim()
      .email("Invalid email address.")
      .required("Required."),
    phone: Yup.string("Invalid input type.")
      .phone("IN", false, "Not a valid phone number")
      .required("Required."),
    yearOfGrad: Yup.number("Invalid input type.")
      .min(2023, "Minimum 2023.")
      .max(2026, "Maximum 2026")
      .required("Required."),
    regNo: Yup.string("Invalid input type.").trim(),
    department: Yup.string("Invalid input type.").trim(),
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      await postRegistration(values);
      Toast(true, "Registered Successfully! See you soon 🥰");
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
        <Form className="max-w-4xl w-10/12 mx-auto flex flex-col justify-center items-center text-white">
          <h2 className="text-medium-turquoise bg-indigo-dye py-5 px-5 lg:px-10 text-xl lg:text-3xl rounded-xl font-semibold my-10">
            Registration Form
          </h2>

          <div className="flex flex-wrap justify-between w-full">
            {REGISTRATION_INPUTS.map((input, i) => (
              <div
                key={input.name}
                className={`flex flex-col ${
                  i < 2 ? "md:w-5/12 w-full" : "w-full"
                }`}
              >
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
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
