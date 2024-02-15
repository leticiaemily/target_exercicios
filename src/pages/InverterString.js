import React, { useState } from "react";
import './styles/InverterString.css'
import Book from '../assets/images/Book.png'

function InverterString() {
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");

  const handleInputChange = (event) => {
    setEntrada(event.target.value);
  };

  const inverterString = () => {
    let stringInvertida = "";
    for (let i = entrada.length - 1; i >= 0; i--) {
      stringInvertida += entrada[i];
    }
    setSaida(stringInvertida);
  };

  return (
    <div className="main_invert">
      <img src={Book} alt="Books" className="img_book"/>
      <div className="card_invert">
        <h2>Inverter String</h2>
        <input
          type="text"
          value={entrada}
          onChange={handleInputChange}
          placeholder="Digite a string"
        />
        <button onClick={inverterString}>Inverter</button>
        <p>String invertida: {saida}</p>
      </div>
    </div>
  );
}

export default InverterString;
