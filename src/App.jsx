import React, { useState } from "react";
import Headpart from "./Components/Headpart.jsx";
import Mainpart from "./Components/Mainpart.jsx";
import SecondMainpart from "./Components/SecondMainpart.jsx";
import Footerpart from "./Components/Footerpart.jsx";
import Modal from "./Components/Modal.jsx";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [secondMainInstruction] = useState([
    "アウトプットについて",
    "趣味",
    "普段の生活",
  ]);
  const [secondMainExplain] = useState([
    "Githubやherokuに公開しています",
    "スキーが趣味です",
    "金融機関に勤務している大阪人です",
  ]);
  const [modalInstruction, setmodalInstruction] = useState(["", "", ""]);
  const [modalExplain] = useState(["", "", ""]);
  return (
    <>
      <Headpart />
      <Mainpart />
      <SecondMainpart
        setDisplayModal={setDisplayModal}
        secondMainInstruction={secondMainInstruction}
        secondMainExplain={secondMainExplain}
        setmodalInstruction={setmodalInstruction}
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
