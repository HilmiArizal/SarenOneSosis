import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
