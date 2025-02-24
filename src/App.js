import React from "react";
import { Route } from "wouter";
import IndexPage from "./views/main";
import CartaOnlineTest from "./views/./BarTest/testBar1";
import { TestBarContextProvider } from "./views/BarTest/testbar1provider";
function App() {
  return (
    <div>
      <Route path="" component={IndexPage} />
      <TestBarContextProvider>
        <Route path="/demo" component={CartaOnlineTest} />
      </TestBarContextProvider>
    </div>
  );
}

export default App;
