import Input from "./formInput";

const RegistrationForm = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
    flex-col text-white"
    >
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="bg-[#24354F] w-8/12 px-20 rounded-3xl text-3xl shadow-2xl shadow-[#DB00FF] text-center py-10 my-10">
          Event Registration
        </div>

        <Input label="Full Name">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-7/12"
            placeholder="First Name"
          />
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-7/12"
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

        <div className="w-full flex flex-col justify-center items-center ">
          <div>For students of SRMIST</div>
          <Input label="Registration Number">
            <input
              type="text"
              className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-7/12"
            />
          </Input>
          <Input label="Department (with specialisation)">
            <input
              type="text"
              className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-7/12"
            />
          </Input>
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
