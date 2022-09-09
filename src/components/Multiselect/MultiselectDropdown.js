import Alert from "../UI/Alert";
import "./MultiselectDropdown.css";

function MultiselectDropdown(props) {
  function handleItemClick(e) {
    props.onItemClick((prev) => [...prev, e]);
    props.handleItemDelete(e);
  }

  return (
    <div
      style={{ top: props.parentPosition + 32 + "px" }}
      className="multiselect__dropdown"
    >
      {props.areOptionsChaotic && (
        <Alert
          onClick={props.onClickReorder}
          onReorder={props.reorderOptions}
          className="bg-success"
        >
          <h6>Reorder options</h6>
        </Alert>
      )}

      {props.options.length > 0 ? (
        props.options.map((option) => {
          return (
            <div onClick={() => handleItemClick(option)} key={option.value}>
              {option.title}
            </div>
          );
        })
      ) : (
        <h5 className="p-3">No elements to select</h5>
      )}
    </div>
  );
}

export default MultiselectDropdown;
