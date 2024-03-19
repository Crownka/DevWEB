import React from 'react';
import { World, Arena, Hero, Enemy } from './componentes/00Atividades/02Atividades/03Batalha';
import './App.css';

function App() {
  return (
    <div className="App">
      <World>

        <Arena arena="Underground Arena">
          <Hero name="Baki" img="assets/imagens/hero.jpg" /> // não consigo importar as imagens
          <Enemy name="Yujiro" img="IMAGENS/Yujiro.jpeg" />
        </Arena>

        <Arena arena="Purgatory">
          <Hero name="Ohma" img="IMAGENS/another_hero.jpg" /> // não consigo importar as imagens
          <Enemy name="Raian" img="IMAGENS/another_enemy.png" />
        </Arena>

      </World>
    </div>
  );
}

export default App;
