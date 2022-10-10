import React, { useState } from "react";
import Headpart from "./Components/Headpart.jsx";
import Mainpart from "./Components/Mainpart.jsx";
import SecondMainpart from "./Components/SecondMainpart.jsx";
import Footerpart from "./Components/Footerpart.jsx";
const App = () => {
  return (
    <>
      <Headpart />
      <Mainpart />
      <SecondMainpart />
      <Footerpart />
    </>
  );
};

export default App;
