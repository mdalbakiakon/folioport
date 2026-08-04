import { ReactLenis } from "lenis/react";
import React from "react";
import Second from "./pages/Second";

const App = () => {
  return (
    <>
      {/* lenis scroll */}
      <ReactLenis root />

      <main>
        <Second />
      </main>
    </>
  );
};

export default App;
