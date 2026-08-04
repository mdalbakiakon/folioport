import { ReactLenis } from "lenis/react";
import React from "react";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      {/* lenis scroll */}
      <ReactLenis root />

      <main>
        <Landing />
      </main>
    </>
  );
};

export default App;
