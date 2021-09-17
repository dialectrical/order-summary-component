import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";
import backgroundDecoration from "./img/pattern-background-desktop.svg";

function App() {
  return (
    <div className="App">
      <img src={backgroundDecoration} className="background" />
      {Card()}
    </div>
  );
}

export default App;
