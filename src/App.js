import React from "react";
import { Route } from "wouter";
import IndexPage from "./views/main";
import CartaOnlineTest from "./views/testBar1";

function App() {
  return (
    <div className="App">
      <Route path="" component={IndexPage} />
      <Route path="/testBar" component={CartaOnlineTest} />
    </div>
  );
}

export default App;
