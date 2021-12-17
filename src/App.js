import { useRef } from "react";
import "./styles.css";

export default function App() {
  const Reference = useRef(null);

  function handleClick() {
    console.log(Reference.current.value);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" ref={Reference} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
