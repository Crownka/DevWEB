import React from 'react';

// Componente Questao01A
const Questao01A = () => {
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 }
  ];

  return <Questao01B lista={lista} />; //chamando Questao01 e passando a lista como propriedade
};

// Componente Questao01B
function Questao01B({ lista }) {
  // Mapeando a lista e extraindo o maior valor de cada objeto
  return (
    <div>
      {lista.map((item, index) => { // achando o maior valor
        const maiorValor = Math.max(item.a, item.b, item.c);

        return <p key={index}>Maior valor do objeto {index + 1}: {maiorValor}</p>; //mostrando o maior valor
      })}
    </div>
  );
}

export default Questao01A;
