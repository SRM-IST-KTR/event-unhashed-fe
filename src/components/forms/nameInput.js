const NameInput = (props) => {
  return (
    <div className="w-[45%]">
      <input
        id={props.id}
        name={props.id}
        onChange={props.handleChange}
        value={props.value}
        type={props.type}
        className={`mr-1 py-3 pl-5 text-lg text-black rounded-2xl ${props.width}`}
        placeholder={props.placeholder}
      />
      {props.error ? (
        <div className="text-[#ff0000] text-lg pt-3">{props.error}</div>
      ) : null}
    </div>
  );
};

export default NameInput;
