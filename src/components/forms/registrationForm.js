import Input from "./formInput";
import styles from "./box.module.css";
import FormHeading from "./formHeading";

const RegistrationForm = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
    flex-col text-white"
    >
      <div className="w-1/2 flex flex-col justify-center items-center">
        <FormHeading heading="Event Registration" />
        <Input label="Full Name">
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

        <Input label="Contact Number">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-7/12"
            placeholder="Contact Number"
          />
        </Input>

        <div className={`w-full m-10 ${styles.border}`}>
          <div className="w-full flex flex-col justify-center items-center p-10">
            <div className="text-2xl font-semibold">For students of SRMIST</div>
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
        </Input>

        <button className="m-10 w-64 py-5 text-2xl bg-[#7509C9] rounded-lg ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
