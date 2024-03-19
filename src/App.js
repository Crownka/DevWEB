import React from 'react';
import { World, Arena, Hero, Enemy } from './componentes/00Atividades/02Atividades/03Batalha';
import './App.css';

function App() {
  return (
    <div className="App">
      <World>
        <Arena arena="Tokio Dome — Underground Arena">
          <Hero name="Sicrano de Tal" img="hero.jpg" />
          <Enemy name="Fulano de Tal" img="enemy.png" />
        </Arena>
        <Arena arena="Another Arena">
          <Hero name="Another Hero" img="another_hero.jpg" />
          <Enemy name="Another Enemy" img="another_enemy.png" />
        </Arena>
      </World>
    </div>
  );
}

export default App;
