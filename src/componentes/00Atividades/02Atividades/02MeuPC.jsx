import React from 'react';

const PlacaMae = ({ nome, preco }) => {
  return (
    <div>
      <h2>Placa Mãe</h2>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco}</p>
    </div>
  );
};

const Memoria = ({ nome, preco }) => {
  return (
    <div>
      <h2>Memória</h2>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco}</p>
    </div>
  );
};

const PlacaDeVideo = ({ nome, preco }) => {
  return (
    <div>
      <h2>Placa de Vídeo</h2>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco}</p>
    </div>
  );
};

export { PlacaMae, Memoria, PlacaDeVideo };

/*

// App.js

import React from 'react';
import { PlacaMae as PCPlacaMae, Memoria as PCMemoria, PlacaDeVideo as PCPlacaDeVideo } from './components/atividade01/02MeuPC';

function App() {
  return (
    <div className="App">
      <h1>Meu Computador</h1>
      <PCPlacaMae nome="Asus ROG Strix" preco="1200" />
      <PCMemoria nome="Corsair Vengeance" preco="300" />
      <PCPlacaDeVideo nome="Nvidia RTX 3080" preco="2500" />
    </div>
  );
}

export default App;


*/