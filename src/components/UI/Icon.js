import classes from "./Icon.module.css";

function Icon(props) {
  return (
    <div className={classes.icon} onClick={props.onClick}>
      <img src={process.env.PUBLIC_URL + "/images/remove.png"} />
    </div>
  );
}

export default Icon;
