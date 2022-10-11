import React from "react";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="photo">
        <h1>aaa</h1>
      </div>
      <div className="details">
        <h2>プロフィール</h2>
        <p>1998年生まれ<br/>
           大学時代はアルペンスキー部に所属<br/>
           3度の脛骨・腓骨の骨折にあうも、諦めずに4年間部活を継続<br/>
           卒業後は中小企業の経営者に向けた保険を主力とする生命保険会社に入社<br/>
           現在は本社で勤務しており、新しい保険契約の査定業務に従事している傍ら<br/>
           Excel VBAを活かした事務作業の効率化に努めています<br/>
           【効率化例】<br/>
           毎日更新されるCSVの自動連携機能の実装<br/>
           部内共有のExcelファイルの動作高速化<br/>
           特定の商品に関して社内で使用する案内文書の表現に制御をかける機能の実装
        </p>
      </div>
    </div>
  );
};

export default Profile;
