import React from "react";

const Mainpart = (props) => {
  const { setDisplayModal } = props;
  const onClickOpenModal = () => {
    setDisplayModal(true);
  };
  return (
    <>
      <div className="main">
        <div className="about">
          <div className="aboutMe">
            <h1>私について</h1>
            <p>
              JavaScriptをメインで学習している社会人です
              <br />
              休日を使って誰かの為になるようなモノを作るべく勉強中
              <br />
              プログラミングの奥深さに苦戦していますがめげずに頑張中
            </p>
            <button className="btn1" onClick={onClickOpenModal}>
              詳しく
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpart;
