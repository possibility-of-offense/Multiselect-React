import { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import MultiselectBox from "./MultiselectBox";

function Multiselect() {
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const styleObj = {
    width: 800,
  };

  return (
    <Card styling={styleObj} className="multiselect__card">
      {showModal && <Modal onOverlayClick={setShowModal}>{modalMsg}</Modal>}
      <MultiselectBox onShowModal={setShowModal} onSetMsg={setModalMsg} />
    </Card>
  );
}

export default Multiselect;
