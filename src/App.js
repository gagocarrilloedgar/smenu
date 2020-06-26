import React from "react";
import { Route } from "wouter";
import IndexPage from "./views/main";
import CartaOnlineTest from "./views/./BarTest/testBar1";
import { TestBarContextProvider } from "./views/BarTest/testbar1provider";
function App() {
  return (
    <div className="App">
      <Route path="" component={IndexPage} />
      <TestBarContextProvider>
        <Route path="/dolceVittaBlanes" component={CartaOnlineTest} />
      </TestBarContextProvider>
    </div>
  );
}

export default App;
