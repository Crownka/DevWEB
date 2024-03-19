import React from 'react';
import { World, Arena, Hero, Enemy } from './componentes/00Atividades/02Atividades/03Batalha';
//import './App.css'; pra ficar mais bonito (centralizado)

// não conseguimos usar o import de imagens pra deixar daora, acho que precisa de css pra isso

function App() {
  return (
    <div className="App">
      <World>

        <Arena arena="Underground Arena">
          <Hero name="Baki Hanma" img="assets/Baki.jpeg" />
          <Enemy name="Yujiro Hanma" img="" />
        </Arena>

        <Arena arena="Purgatory">
          <Hero name="Ohma Tokita" img="" />
          <Enemy name="Raian Kure" img="" />
        </Arena>

      </World>
    </div>
  );
}

export default App;
