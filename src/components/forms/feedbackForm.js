import FormHeading from "./formHeading";
import Input from "./formInput";

const FeedbackForm = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
flex-col text-white"
    >
      <div className="w-1/2 lg-w-full flex flex-col justify-center items-center">
        <FormHeading heading="Feedback Form" />
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

        <Input label="Thoughts on the event">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full h-24"
          />
        </Input>

        <Input label="Recommendations">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full"
          />
        </Input>

        <Input label="Experience gained from the event">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full"
          />
        </Input>

        <button className="m-10 w-64 py-5 text-2xl bg-[#7509C9] rounded-lg ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
