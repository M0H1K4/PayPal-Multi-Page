import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";

import Middle from "./Components/Middle/Middle";
import Terminal from "./Components/Terminal/Terminal";

function App() {
  return (
    <div className="App">
      <Header />
      <Middle />
      <Terminal />
    </div>
  );
}

export default App;
