const VisibilityButton = (props) => {
  return (
    <button
      className="text-[#29CCC4] bg-[#1D426B] py-5 px-10 text-3xl rounded-xl font-semibold m-10"
      onClick={props.handler}
      type="button"
    >
      {props.label}
    </button>
  );
};

export default VisibilityButton;
