import logo from "./logo.svg";
import "./App.css";
import TopComponent from "./top/top";
import Nav from "./nav/nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WithLoader from "./HOC/withLoader";

function App() {
  const Component = WithLoader(TopComponent);
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <Component title={"TOP C"}></Component>
      </header>
    </div>
  );
}

export default App;
