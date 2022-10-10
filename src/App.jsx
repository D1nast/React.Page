import React, { useState } from "react";
import Headpart from "./Components/Headpart.jsx";
import Mainpart from "./Components/Mainpart.jsx";
import SecondMainpart from "./Components/SecondMainpart.jsx";
import Footerpart from "./Components/Footerpart.jsx";
import Modal from "./Components/Modal.jsx";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <Headpart />
      <Mainpart />
      <SecondMainpart />
      <Footerpart />
      <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} />
    </>
  );
};

export default App;
