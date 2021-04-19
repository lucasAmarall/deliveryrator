import React from "react";
import Router from "./router";
import GlobalStyles from "./constants/GloablalStyles";
import { GlobalProvider } from "./context/GlobalContext";

function App(): React.ReactElement {
  return (
    <div className="App">
      <GlobalProvider>
        <GlobalStyles />
        <Router />
      </GlobalProvider>
    </div>
  );
}

export default App;
