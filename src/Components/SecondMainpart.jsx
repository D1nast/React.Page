import React from "react";

const SecondMainpart = () => {
  return (
    <>
      <div className="second-main">
        <div className="secondMain-contents">
          <div className="secondContents-flex">
            <h1>アウトプットについて</h1>
            <p>Githubやherokuに公開しています</p>
            <button className="btn1">詳しく</button>
          </div>
          <div className="secondContents-flex">
            <h1>趣味</h1>
            <p>スキーが趣味です</p>
            <button className="btn1">詳しく</button>
          </div>
          <div className="secondContents-flex">
            <h1>普段の生活</h1>
            <p>金融機関に勤務している大阪人です</p>
            <button className="btn1">詳しく</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondMainpart;
