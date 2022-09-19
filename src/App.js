import React from "react";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
