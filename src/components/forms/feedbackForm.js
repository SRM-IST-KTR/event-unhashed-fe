import FormHeading from "./formHeading";
import FormInput from "./formInputs";
import { useFormik } from "formik";
import NameInput from "./nameInput";
import { newNameInput, newFeedbackInput } from "../../utils/constants";

const FeedbackForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      thoughts: "",
      recommendations: "",
      experience: "",
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
        <div className="w-1/2 lg-w-full flex flex-col justify-center items-center">
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

export default FeedbackForm;
