import "./SelectedItems.css";

function SelectedItems(props) {
  return (
    <div className="selected-wrapper">
      {props.selected.length > 0 &&
        props.selected.map((el) => (
          <div onClick={() => props.deleteFromSelected(el)} key={el.value}>
            {el.title}
          </div>
        ))}
    </div>
  );
}

export default SelectedItems;
