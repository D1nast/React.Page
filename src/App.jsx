import React, { useState } from "react";
import Headpart from "./Components/Headpart.jsx";
import Mainpart from "./Components/Mainpart.jsx";
import SecondMainpart from "./Components/SecondMainpart.jsx";
import Footerpart from "./Components/Footerpart.jsx";
import Modal from "./Components/Modal.jsx";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalInstruction, setModalInstruction] = useState("");
  const [modalExplain, setModalExplain] = useState("");
  return (
    <>
      <Headpart />
      <Mainpart />
      <SecondMainpart
        setDisplayModal={setDisplayModal}
        setmodalInstruction={setModalInstruction}
        setModalExplain={setModalExplain}
      />
      <Footerpart />
      <Modal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        modalInstruction={modalInstruction}
        modalExplain={modalExplain}
      />
    </>
  );
};

export default App;
