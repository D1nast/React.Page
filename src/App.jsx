import React, { useState } from "react";
import Headpart from "./Components/Headpart.jsx";
import Mainpart from "./Components/Mainpart.jsx";
import SecondMainpart from "./Components/SecondMainpart.jsx";
import Footerpart from "./Components/Footerpart.jsx";
import Modal from "./Components/Modal.jsx";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [secondMainInstruction] = useState([
    "Codeのデプロイ",
    "趣味",
    "私について",
  ]);
  const [secondMainExplain] = useState([
    "コードはGithubに、WebサイトについてはAWSを使用して公開しています",
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
