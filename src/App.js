import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Telefonebi from "./Components/Telefonebi/Telefonebi";
import Middle from "./Components/Middle/Middle";
import Terminal from "./Components/Terminal/Terminal";
import Bolo from './Components/Bolo/Bolo';
import Bolo2 from './Components/Bolo2/Bolo2';
import footer from './Components/Footer/Footer'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Middle />
      <Terminal />
      <Telefonebi/>
      <Bolo/>
      <Bolo2/>
      <Footer/>
    </div>
  );
}

export default App;
