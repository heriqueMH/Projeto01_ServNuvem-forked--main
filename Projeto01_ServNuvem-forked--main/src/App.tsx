import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://9tdlpw-5005.csb.app/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log("Erro ao buscar API:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Projeto 1 - Aplicação Web </h1>
        <p>
          Equipe: CLP - Cleide Lustosa, Lucca Pivoto e Pedro Ruiz: {message}
        </p>
      </header>
    </div>
  );
}

export default App;
