/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useRef, useContext } from "react";

import { Board } from "./Components/Board";
import { Header } from "./Components/Header";
import { Keyboard } from "./Components/Keyboard";
import { Provider } from "./Provider";
import { BlockContext } from "./Context";

const App: React.FC = () => {
  // Create a reference for each block of the board to control
  // the text displayed within it
  const blocksRef = useRef<any[]>([]);
  // Get the global context passed on to all components within the
  // context provider
  const { status, setStatus } = useContext(BlockContext);
  return (
    <Provider>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Header />
        <hr className="w-100 mb-4 mt-0 p-0" />
        <Board blocksRef={blocksRef} />
        <Keyboard blocksRef={blocksRef} />
      </div>
    </Provider>
  );
};

export default App;
