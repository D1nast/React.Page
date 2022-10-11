import React from "react";

const Modal = (props) => {
  const { displayModal, setDisplayModal, modalInstruction, modalExplain } =
    props;
  const onClickCloseModal = () => {
    setDisplayModal(false);
  };
  if (displayModal) {
    return (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-header"></div>
          <div className="modal-introduction">
            <h2>{modalInstruction}</h2>
            <p>{modalExplain}</p>
          </div>
          <div className="BtnWrap">
            <button className="modalCloseBtn" onClick={onClickCloseModal}>
              とじる
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
