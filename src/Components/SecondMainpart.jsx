import React from "react";

const SecondMainpart = (props) => {
  const {
    setDisplayModal,
    secondMainInstruction,
    secondMainExplain,
    setmodalInstruction,
  } = props;
  const onClickOpenModal = (index) => {
    setmodalInstruction(secondMainInstruction[index]);
    setDisplayModal(true);
  };
  return (
    <>
      <div className="second-main">
        <div className="secondMain-contents">
          <div className="secondContents-flex">
            <div className="secondContents-discription">
              <h1>{secondMainInstruction[0]}</h1>
              <p>{secondMainExplain[0]}</p>
            </div>
            <button
              className="btn1"
              onClick={() => {
                onClickOpenModal([0]);
              }}
            >
              詳しく
            </button>
          </div>
          <div className="secondContents-flex">
            <div className="secondContents-discription">
              <h1>{secondMainInstruction[1]}</h1>
              <p>{secondMainExplain[1]}</p>
            </div>
            <button
              className="btn1"
              onClick={() => {
                onClickOpenModal([1]);
              }}
            >
              詳しく
            </button>
          </div>
          <div className="secondContents-flex">
            <div className="secondContents-discription">
              <h1>{secondMainInstruction[2]}</h1>
              <p>{secondMainExplain[2]}</p>
            </div>
            <button
              className="btn1"
              onClick={() => {
                onClickOpenModal([2]);
              }}
            >
              詳しく
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondMainpart;
