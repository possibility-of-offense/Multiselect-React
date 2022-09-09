import "./MultiselectChevron.css";

function MultiselectChevron(props) {
  function handleChevronClick() {
    props.onToggleChevronClick((prev) => !prev);
  }

  return (
    <div className="multiselect__chevron" onClick={handleChevronClick}>
       <img 
        className={props.dropdownState ? 'up' : 'down'}
       src={process.env.PUBLIC_URL + "/images/down-chevron.png"} />
    </div>
  );
}

export default MultiselectChevron;
