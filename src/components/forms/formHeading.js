const FormHeading = (props) => {
  return (
    <div className="bg-[#24354F] w-8/12 px-10 lg:px-20 rounded-xl text-2xl lg:text-4xl font-bold shadow-[#DB00FF] shadow-lg text-center py-10 my-10">
      {props.heading}
    </div>
  );
};

export default FormHeading;
