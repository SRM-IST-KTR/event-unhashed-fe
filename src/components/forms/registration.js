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
      firstName: Yup.string().trim().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Required"),
      phone: Yup.number().min(10).required("Required"),
      regNo: Yup.string().trim(),
      department: Yup.string().trim(),
      yearOfGrad: Yup.number().min(2023).max(2026).required("Required"),
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
      <div className="w-10/12 lg:w-1/2 flex flex-col justify-center items-center text-yellow-500">
        <h2 className="text-[#29CCC4] bg-[#1D426B] py-5 px-10 text-3xl rounded-xl font-semibold m-10">
          Registration Form
        </h2>

        <div className="flex flex-wrap justify-between w-full">
          {REGISTRATION_INPUTS.map((input, i) => (
            <Input key={input.name} {...input} />
          ))}
        </div>

        <button
          className="px-6 py-2 text-lg bg-[#7509C9] rounded text-[#FFFFFF] font-bold"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
