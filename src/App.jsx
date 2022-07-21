import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); // stateの変数名と更新する関数名。useStateのカッコ内は初期値
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1); // state更新されるとコンポーネント（App.jsx）が再読み込みされる
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]); // 第二引数が空配列なら最初の1回だけ

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_^)</p>}
    </>
  );
};

// export default App; // 他のファイルでも使用するという意味
