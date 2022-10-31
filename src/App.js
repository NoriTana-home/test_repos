/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  const styleCase1 = {
    color: "blue",
    fontSize: "2.0rem"
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]); // faceShowFlagを監視したくないので入れない

  return (
    <>
      <h1 style={{ color: "red", fontSize: "1.5rem" }}>こんちは</h1>
      <p style={styleCase1}> こんばんは </p>
      <p style={styleCase1}> 元気ですか？ </p>
      <ColorfulMessage color="orange" message="元気です" />

      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>(・ω・)</p>}
    </>
    /** 1つのタグで全てを囲むか、
     * React.Fragmentタグで囲む
     */
  );
};

export default App;
