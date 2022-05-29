const FormInput = (props) => {
  return (
    <div className="w-full">
      <div className="text-xl py-4">
        {props.label}
        <span className="text-[#ff0000]"> *</span>
      </div>
      <div className="flex justify-between">
        <input
          id={props.id}
          name={props.id}
          onChange={props.handleChange}
          value={props.value}
          type={props.type}
          className={`mr-1 py-3 pl-5 text-lg text-black rounded-2xl ${props.width}`}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default FormInput;
