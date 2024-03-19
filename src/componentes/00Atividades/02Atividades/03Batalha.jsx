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
