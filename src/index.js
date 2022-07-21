import React from "react";
import ReactDom from "react-dom";
// import CreateRoot from "react-dom/client"; //React18
import { App } from "./App";

// jsx記法＝jsにhtml書いてくやつ、1つのタグを返さないといけない
// 不要なタグを返したくない場合はReact.Fragmentが使える
// React.Fragmentと同じなのが空の<>

const container = document.getElementById("root");

// React 17
ReactDom.render(<App />, container);

// React 18
// const root = CreateRoot.createRoot(container);
// root.render(<App />);
