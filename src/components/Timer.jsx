import React, { useState, useEffect } from "react";

function Timer(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I am haveing a useEffect her, please be quite!");

    const intervalId = setInterval(
      () => setCount((currentCount) => currentCount + 1),
      1 * 1000
    );

    return () => clearInterval(intervalId); // cleanup runs AFTER useEffect has finished
  }, []);

  useEffect(() => {
    console.log("useEffect - on update");
    document.title = "Timer app count is: " + count;
  }, [count]);

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
