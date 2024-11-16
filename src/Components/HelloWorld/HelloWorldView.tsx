import React, { useContext, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IHelloWorld } from "../../Model/IHelloWorld";
import "./HelloWorld.css";
import { ToggleContext } from "../../Context/Toggle";

interface IHelloWorldView {
  data: IHelloWorld;
}
interface Map {
  [key: string]: string | undefined;
}

const codeHighlighter: Map = {
  "c++": "cpp",
  "c#": "csharp",
};

const spacesToRemove = 8;

const HelloWorldView: React.FC<IHelloWorldView> = ({
  data,
}: IHelloWorldView) => {
  const toggle = useContext(ToggleContext);
  const [view, setView] = useState(toggle);

  useEffect(() => {
    setView(toggle);
    console.log("view", view, "toggle", toggle);
  }, [toggle]);

  const preetyFormat = (line: string): string => {
    const startSpaces = " ".repeat(spacesToRemove);
    return line
      .split("\n")
      .map((line) => {
        if (line.startsWith(startSpaces)) {
          return line.substring(spacesToRemove);
        }
        return line;
      })
      .filter((line) => line.length > 0)
      .join("\n");
  };

  return (
    <div className="hello-world">
      <div
        className="language"
        onClick={() => {
          setView(!view);
        }}
      >
        <object data={data.logoLink} type="image/png" className="logo">
          <img src={data.logoLink} className="logo" />
        </object>
        <strong>{data.language.toUpperCase()}</strong>
      </div>
      <div className={"code" + (view ? "" : " hide ")}>
        <SyntaxHighlighter
          language={
            codeHighlighter[data.language]
              ? codeHighlighter[data.language]
              : data.language
          }
          style={codeStyle}
        >
          {preetyFormat(data.code)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HelloWorldView;
