import React from 'react';
import Filho from './01Filho';

const Pai = () => {
  const altura = 1.8;
  const peso = 90;

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <Filho altura={altura} peso={peso} />
    </div>
  );
};

export default Pai;