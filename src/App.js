import { useState } from "react";
import "./App.css";
import IronbnbList from './components/IronbnbList';  // <== IMPORT

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <IronbnbList />}
    </div>
  );
}

export default App;
