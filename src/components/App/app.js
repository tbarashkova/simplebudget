import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Wrapper, GlobalStyle } from "./styles";
import Header from "../Header";
import Home from "../Home";
import Statistics from "../Statistics";
import About from "../About";
import Settings from "../Settings";

import { open } from "../../utils/indexdb";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    open()
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error", e);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;