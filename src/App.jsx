import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App" role="main">
      <article className="App-article">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to Bunjs with React!</h3>
        <a
          className="App-link"
          href="https://github.com/oven-sh/bun#using-bun-with-create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bunjs | React
        </a>
      </article>
    </div>
  );
}

export default App;
