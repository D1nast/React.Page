import React from "react";

const Modal = (props) => {
  const { displayModal, setDisplayModal } = props;
  const onClickCloseModal = () => {
    setDisplayModal(false);
  };
  if (displayModal) {
    return (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-header"></div>
          <div className="modal-introduction">
            <h2>当サイトについて</h2>
            <p>
              本サイトはAWSを使用してデプロイしています。
              <br />
              言語はJavaScriptで、フレームワークのReactを用いています。
            </p>
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
