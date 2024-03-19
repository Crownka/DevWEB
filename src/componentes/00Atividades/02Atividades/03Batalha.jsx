import React from 'react';

function Hero(props) {
  return (
    <div>
      <h3>Hero: {props.name}</h3>
      <img src={props.img} alt="Hero" />
    </div>
  );
}

function Enemy(props) {
  return (
    <div>
      <h3>Enemy: {props.name}</h3>
      <img src={props.img} alt="Enemy" />
    </div>
  );
}

function Arena(props) {
  return (
    <div>
      <h2>Arena: {props.arena}</h2>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, { arena: props.arena });
      })}
    </div>
  );
}

function World(props) {
  return (
    <div>
      <h1>World</h1>
      {props.children}
    </div>
  );
}

export { Hero, Enemy, Arena, World };

/*

app.js:

import React from 'react';
import { World, Arena, Hero, Enemy } from './componentes/00Atividades/02Atividades/03Batalha';
//import './App.css'; pra ficar mais bonito (centralizado)

// não consegui usar o import de imagens pra deixar daora

function App() {
  return (
    <div>
      <World>

        <Arena arena="Underground Arena">
          <Hero name="Baki Hanma" img="assets/imagens/hero.jpg" />
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


*/
