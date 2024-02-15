
import React, { useState, useEffect } from "react";
import dados from "./dados.json";
import './styles/FaturamentoMensal.css';
import Business from '../assets/images/business.png'

function FaturamentoMensal() {
  const [menorValor, setMenorValor] = useState(null);
  const [maiorValor, setMaiorValor] = useState(null);
  const [diasAcimaDaMedia, setDiasAcimaDaMedia] = useState(0);

  useEffect(() => {
    let faturamentos = dados.map((dia) => dia.valor);
    let faturamentosValidos = faturamentos.filter((valor) => valor !== 0);
    let somaFaturamentos = faturamentosValidos.reduce((acc, cur) => acc + cur, 0);
    let media = somaFaturamentos / faturamentosValidos.length;

    setMenorValor(Math.min(...faturamentosValidos));
    setMaiorValor(Math.max(...faturamentosValidos));
    setDiasAcimaDaMedia(faturamentosValidos.filter((valor) => valor > media).length);
  }, []);

  return (
    <div className="main_faturamentomensal">
      <img src={Business} alt="calculator" className="img_business"/>
      <div className="card_faturamento">
        <h2>Informações de Faturamento Mensal</h2>
        <p>Menor valor de faturamento diário: R${menorValor !== null ? menorValor.toFixed(2) : "Carregando..."}</p>
        <p>Maior valor de faturamento diário: R${maiorValor !== null ? maiorValor.toFixed(2) : "Carregando..."}</p>
        <p>Número de dias com faturamento superior à média mensal: {diasAcimaDaMedia}</p>
      </div>
    </div>
  );
}

export default FaturamentoMensal;
