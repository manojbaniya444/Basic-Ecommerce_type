import React from "react";
import { AppProvider } from "./context";
import Main from "./Main";
// import "./Style/Home.css"
const App = () => {
  return (
    <AppProvider>
      <main className="top">
        <Main />
      </main>
    </AppProvider>
  );
};

export default App;
