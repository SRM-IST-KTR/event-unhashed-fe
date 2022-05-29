import FormHeading from "./formHeading";
import Input from "./formInput";

const QueriesForm = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
flex-col text-white"
    >
      <form className="md:w-8/12 lg:w-1/2 flex flex-col justify-center items-center" >
        <FormHeading heading="Queries Form" />
        <Input label="Full Name" className="">
          <div className="flex flex-col md:flex-row gap-4 w-full">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl md:flex-1"
            placeholder="First Name"
            />
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl md:flex-1"
            placeholder="Last Name"
            />
            </div>
        </Input>

        <Input label="Doubts">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full"
          />
        </Input>

        <Input label="E - mail">
          <input
            type="text"
            className="mr-1 py-3 pl-5 text-lg text-black rounded-2xl w-full"
          />
        </Input>

        <button className="m-10 w-64 py-5 text-2xl bg-[#7509C9] rounded-lg ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueriesForm;
