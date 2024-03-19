import React from 'react';

function Hero(props) {
  return (
    <div>
      <h2>Hero: {props.name}</h2>
      <img src={props.img} alt="Hero" />
    </div>
  );
}

function Enemy(props) {
  return (
    <div>
      <h2>Enemy: {props.name}</h2>
      <img src={props.img} alt="Enemy" />
    </div>
  );
}

function Arena(props) {
  return (
    <div>
      <h1>Arena: {props.arena}</h1>
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
