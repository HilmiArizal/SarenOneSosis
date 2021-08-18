import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { RingLoader } from "react-spinners";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fetchLoading();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loader-spinner">
          <RingLoader color={'#800000'} loading={loading} size={150} />
        </div>
      ) : (
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
