import React from 'react';

const Filho = ({ altura, peso }) => {
  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    
    if (imc < 18) {
      return <h3>Abaixo do peso</h3>;
    } else if (imc > 25) {
      return <h3>Acima do peso</h3>;
    } else {
      return <h3>Peso ideal</h3>;
    }
  };

  return (
    <div>
      {calcularIMC()}
      <p>IMC: {peso / (altura * altura)}</p>
    </div>
  );
};

export default Filho;



/*

como fica o App.js:

// App.js

import React from 'react';
import Pai from './components/atividade01/questao01/01Pai';

function App() {
  return (
    <div>
      <Pai />
    </div>
  );
}

export default App;

*/