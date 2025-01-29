import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("")

  function handleClick(e) {
    const value = e.target.value;
    setDisplay((prev) => prev + value)
  }

  function clearDisplay() {
    setDisplay("")
  }

  function calculateResult() {
    try {
      const result = eval(display)
      setDisplay(result.toString())
    } catch (error) {
      setDisplay("Error")
    }
  }

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={display} readOnly />
          </div>
          <div className="buttons">
            <input className="delete" type="button" value="AC" onClick={clearDisplay} />
            <input type="button" value="%" onClick={handleClick} />
            <input type="button" value="/" onClick={handleClick} />
            <input type="button" value="*" onClick={handleClick} />
          </div>
          <div className="buttons">
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input type="button" value="-" onClick={handleClick} />
          </div>
          <div className="buttons">
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input type="button" value="+" onClick={handleClick} />
          </div>
          <div className="buttons">
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input type="button" value="=" className="equal" onClick={calculateResult} />
          </div>
          <div className="buttons">
            <input type="button" value="00" onClick={handleClick} />
            <input type="button" value="0" onClick={handleClick} />
            <input type="button" value="." onClick={handleClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;