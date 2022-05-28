const Input = (props) => {
  return (
    <div className="w-full">
      <div className="text-xl py-4">
        {props.label}
        <span className="text-[#ff0000]"> *</span>
      </div>
      <div className="flex justify-between">{props.children}</div>
    </div>
  );
};

export default Input;
