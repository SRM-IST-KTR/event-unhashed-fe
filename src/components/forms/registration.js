import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { Input } from "../shared";
import { REGISTRATION_INPUTS } from "../../utils/constants";
import { postRegistration } from "../../utils/services/rest";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: 0,
      regNo: "",
      department: "",
      yearOfGrad: 0,
    },

    validationSchema: Yup.object().shape({
      firstName: Yup.string("Invalid input type.").trim().required("Required."),
      lastName: Yup.string("Invalid input type.").required("Required."),
      email: Yup.string("Invalid input type.")
        .trim()
        .email("Invalid email address.")
        .required("Required."),
      phone: Yup.number("Invalid input type.").min(10).required("Required."),
      yearOfGrad: Yup.number("Invalid input type.")
        .min(2023, "Minimum 2023.")
        .max(2026, "Maximum 2026")
        .required("Required."),
      regNo: Yup.string("Invalid input type.").trim(),
      department: Yup.string("Invalid input type.").trim(),
    }),

    onSubmit: async (values) => {
      try {
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
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <form
      className="flex justify-center items-center flex-col text-white"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-10/12 lg:w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-medium-turquoise bg-indigo-dye py-5 px-10 text-3xl rounded-xl font-semibold m-10">
          Registration Form
        </h2>

        <div className="flex flex-wrap justify-between w-full">
          {REGISTRATION_INPUTS.map((input, i) => (
            <>
              <Input key={input.name} {...input} />

              {
                <span className="text-red-500 font-semibold">
                  {formik.touched[input.name]
                    ? formik.errors[input.name]
                      ? formik.errors[input.name]
                      : "\u00A0"
                    : "\u00A0"}
                </span>
              }
            </>
          ))}
        </div>

        <button
          className="px-6 py-2 text-lg bg-french-violet capitalize rounded text-white font-bold"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
