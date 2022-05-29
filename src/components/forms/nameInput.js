const NameInput = (props) => {
  return (
    <input
      id={props.id}
      name={props.id}
      onChange={props.handleChange}
      value={props.value}
      type={props.type}
      className={`mr-1 py-3 pl-5 text-lg text-black rounded-2xl ${props.width}`}
      placeholder={props.placeholder}
    />
  );
};

export default NameInput;
