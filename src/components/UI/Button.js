function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className="btn btn-success">
        {props.children}
      </button>
    </div>
  );
}

export default Button;
