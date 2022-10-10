import React from "react";

const Modal = () => {
  let modall;
  if (displayModal) {
    modal = (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-header"></div>
          <div className="modal-introduction">
            <h2>Nice</h2>
            <p>あ</p>
          </div>
          <div className="BtnWrap">
            <button className="modalCloseBtn" onClick={onClickClose()}>
              とじる
            </button>
          </div>
        </div>
      </div>
    );
  }
  return;
  {modal;}
};

export default Modal;
