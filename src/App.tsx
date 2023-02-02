import {FC, useState } from "react";

import "./App.css";

const App: FC = () => {
  const [big, setBig] = useState<boolean>(false);

  const createBoxes = (): JSX.Element[] => {
    const boxes: JSX.Element[] = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        boxes.push(
          <div
            className="box"
            style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}
            key={`${i}-${j}`}
          />
        );
      }
    }
    return boxes;
  };

  return (
    <>
      <button id="btn" className="magic" onClick={() => setBig(!big)}>
        Magic 🎩
      </button>
      <div id="boxes" className={`boxes ${big ? "big" : ""}`}>
        {createBoxes()}
      </div>
    </>
  );
};

export default App;
