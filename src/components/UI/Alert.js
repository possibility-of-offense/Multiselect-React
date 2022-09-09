import "animate.css";
import "./Alert.css";

function Alert(props) {
  function handleClick() {
    props.onReorder();
    props.onClick();
  }

  return (
    <div
      onClick={handleClick}
      className={`animate__animated animate__fadeInLeft alert ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Alert;
