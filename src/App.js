import NewSourceCode from "./components/NewSource";
import logo from "./images/logo.svg";
import "./styles/App.css";

function App() {
  return (
    <>
      <div>
        <header className="text-center flex flex-col items-center">
          <NewSourceCode />
          <img className="w-1/2 mt-8 img" src={logo} alt="react-logo" />
        </header>
      </div>
    </>
  );
}

export default App
