const Button = (props) => {
  const btnVal = props.value;
  return (
    <div className="flex-item m-1">
      <button
        onClick={() => {
          if (btnVal === "History") {
            console.log(props.history);
          } else {
            props.onClick(props.type, btnVal);
          }
        }}
        type="button"
        className={`btn ${
          btnVal === "Clear" ? "btn-danger" : "btn-primary"
        } btn-primary .btn-lg`}
        style={{ minWidth: "60px" }}
      >
        {btnVal}
      </button>
    </div>
  );
};

export default Button;
