import React, { useState } from "react";
import Labels from "./components/Labels";
import Timer from "./components/Timer";

function App() {
  const [selectedControl, setSelectedControl] = useState(0);
  return (
    <>
      <Labels
        selected={selectedControl}
        handleEvent={(e) => {
          setSelectedControl(e);
        }}
      />
      <Timer selected={selectedControl} />
    </>
  );
}

export default App;
