import "./MultiselectBox.css";
import MultiselectChevron from "./MultiselectChevron";
import MultiselectDropdown from "./MultiselectDropdown";
import SelectedItems from "./SelectedItems";
import Button from "../UI/Button";
import { useEffect, useRef, useState } from "react";
import Icon from "../UI/Icon";

function MultiselectBox(props) {
  const boxDivRef = useRef(null);

  const [parentHeight, setParentHeight] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const [options, setOptions] = useState([
    { value: "1", title: "First option" },
    { value: "2", title: "Second option" },
    { value: "3", title: "Third option" },
    { value: "4", title: "Fourth option" },
    { value: "5", title: "Fifth option" },
    { value: "6", title: "Sixth option" },
    { value: "7", title: "Seventh option" },
  ]);

  const [selected, setSelected] = useState([]);
  const [modified, setModified] = useState(false);

  // Delete from options
  function deleteFromOptions(e) {
    setOptions((prev) => {
      const found = prev.find((el) => el.value === e.value);
      return prev.filter((el) => el.value !== found.value);
    });
  }

  // Delete from selected
  function deleteFromSelected(e) {
    setSelected((prev) => {
      const found = prev.find((el) => el.value === e.value);
      return prev.filter((el) => el.value !== found.value);
    });
    setOptions((prev) => [...prev, e]);
    setModified(true);
  }

  // Delete all selected
  function deleteAllSelected() {
    setOptions((prev) => {
      const all = [...prev, ...selected];
      all.sort((a, b) => Number(a.value) - Number(b.value));
      return all;
    });
    setSelected((prev) => []);
    props.onShowModal(true);
    props.onSetMsg("All selected items deleted!");
  }

  // Sort selected by numeric value
  function reorderSelected() {
    setSelected((prev) =>
      prev.slice().sort((a, b) => Number(a.value) - Number(b.value))
    );
  }

  // Sort options by numeric value
  function reorderOptions() {
    setOptions((prev) =>
      prev.slice().sort((a, b) => Number(a.value) - Number(b.value))
    );
  }

  useEffect(() => {
    setParentHeight(boxDivRef.current.clientHeight);
  }, [parentHeight]);

  return (
    <div
      className="multiselect__box"
      ref={boxDivRef}
      style={{ placeContent: selected.length === 0 ? "center" : "start" }}
    >
      {selected.length > 1 && (
        <div className="reorder-selected">
          <Button onClick={reorderSelected}>Reoder selected</Button>
        </div>
      )}
      <SelectedItems
        deleteFromSelected={deleteFromSelected}
        selected={selected}
      />
      {selected.length === 0 && <p className="mb-0">Search for something</p>}
      {showDropdown && (
        <MultiselectDropdown
          onItemClick={setSelected}
          handleItemDelete={deleteFromOptions}
          options={options}
          parentPosition={parentHeight}
          areOptionsChaotic={modified}
          reorderOptions={reorderOptions}
          onClickReorder={setModified}
        />
      )}
      <div className="actions">
        {selected.length > 0 && !showDropdown && (
          <Icon onClick={deleteAllSelected} />
        )}
        <MultiselectChevron
          onToggleChevronClick={setShowDropdown}
          dropdownState={showDropdown}
        />
      </div>
    </div>
  );
}

export default MultiselectBox;
