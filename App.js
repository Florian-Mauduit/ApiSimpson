import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [simpson, setSimpson] = useState([]);
  useEffect(() => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSimpson(data[0]);
      });
  }, []);

  return (
    <div className="App">
      <h3>{simpson.character}</h3>
      <p>{simpson.quote}</p>
      <img src={simpson.image} alt={simpson.character} />
    </div>
  );
}
export default App;
