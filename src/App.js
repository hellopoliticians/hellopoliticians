import "./styles.css";
import React from "react";
import { Switch, Route } from "react-router-dom-animation";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import News from "./pages/news.js";

const animationProps = {
  style: {
    width: "100%",
    height: "100vh",
    position: "absolute"
  },
  initial: {
    default: { y: "0px" },
    prev: { y: "-100vh" },
    next: { y: "100vh" }
  },
  animate: { y: "0px" },
  exit: {
    prev: { y: "-100vh" },
    next: { y: "100vh" }
  },
  transition: { duration: 1 }
};

const App = () => {
  return (
    <Switch>
      <Route {...animationProps} path="/2" exact component={Home} />
      <Route {...animationProps} path="/" component={About} />
      {/* <Route {...animationProps} path="/news" component={News} /> */}
    </Switch>
  );
};

export default App;
