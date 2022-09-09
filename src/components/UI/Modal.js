import classes from "./Modal.module.css";

function Modal(props) {
  function handleOverlayClick() {
    props.onOverlayClick(false);
  }

  return (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );
}

export default Modal;
