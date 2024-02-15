import React, { useState } from "react";
import './styles/FibonacciChecker.css';
import Calculator from '../assets/images/calculator.png'

function FibonacciChecker() {
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");

  const fibonacciSequence = (n) => {
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < n) {
      fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    return fibonacci;
  }

  const isInFibonacci = (num) => {
    let fibonacci = fibonacciSequence(num);
    return fibonacci.includes(num);
  }

  const verificarFibonacci = () => {
    if (numero === "") {
      setMensagem("Por favor, insira um número.");
      return;
    }

    const num = parseInt(numero);
    if (isNaN(num)) {
      setMensagem("Por favor, insira um número válido.");
      return;
    }

    if (isInFibonacci(num)) {
      setMensagem(`O número ${num} está na sequência de Fibonacci.`);
    } else {
      setMensagem(`O número ${num} não está na sequência de Fibonacci.`);
    }
  }

  return (
    <div className="main_fibonacci">
      <img src={Calculator} alt="calculator" className="img_calculator"/>
      <div className="card_fibonacci">
        <h1>Calculadora Fibonacci</h1>
        <div>
          <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="Digite um número"/>
          <button onClick={verificarFibonacci}>Verificar</button>
        </div>
        <p>{mensagem}</p>
      </div>
    </div>
  );
}

export default FibonacciChecker;


