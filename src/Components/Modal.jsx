import React from "react";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-inner">
        <div className="modal-header"></div>
        <div className="modal-introduction">
          <h2>Nice</h2>
          <p>あ</p>
        </div>
        <div className="BtnWrap">
          <button className="modalCloseBtn">
            とじる
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
