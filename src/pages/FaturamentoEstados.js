import React, { useState, useEffect } from 'react';
import './styles/FaturamentoEstados.css'
import Finance_image from '../assets/images/finance.png'

function FaturamentoEstados() {
  const [faturamentoEstados] = useState([
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
  ]);
  const [totalFaturamento, setTotalFaturamento] = useState(0);
  const [percentuais, setPercentuais] = useState([]);

  useEffect(() => {
    function calcularPercentuais() {
      
      const total = faturamentoEstados.reduce((acc, estado) => acc + estado.valor, 0);
      setTotalFaturamento(total);

      
      const percentuaisCalculados = faturamentoEstados.map((estado) => ({
        estado: estado.estado,
        percentual: (estado.valor / total) * 100
      }));
      setPercentuais(percentuaisCalculados);
    }

    calcularPercentuais();
  }, [faturamentoEstados]);

  return (
    <div className='main_estados'>
      <img src={Finance_image} alt="Finance" className="img_finance"/>
      <div className='card_estados'>
        <h2>Percentual de cada estado</h2>
        <ul className='ul_estados'>
          {percentuais.map((item, index) => (
            <li key={index}>
              {item.estado}: {item.percentual.toFixed(2)}%
            </li>
          ))}
        </ul>
        <p>Total faturamento: {totalFaturamento.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default FaturamentoEstados;