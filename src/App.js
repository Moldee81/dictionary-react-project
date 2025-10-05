import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="peninsula" />
        </main>
        <footer className="App-footer text-center">
          {" "}
          Coded by <span className="accent">Anita Peña-Tomczak</span> and it's
          open-sourced on{" "}
          <a href="https://github.com/Moldee81/dictionary-react-project">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
