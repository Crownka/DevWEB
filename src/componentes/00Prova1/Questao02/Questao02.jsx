import React, { useState } from 'react';

const Questao02 = () => {
    // "deFrente" constrola se a imagem é frontal(true) ou de costas(false)
    const [deFrente, setdeFrente] = useState(true);

    // Função que alterna o estado esse estado (frente ou costas)
    const toggleImage = () => {
    setdeFrente(!deFrente);
    };

  return ( // renderiza a imagem e o botão que alterna a imagem
    <div>
      <img
        src={
          deFrente
            ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
            : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
        }
        alt="Pikachu"
      />
      <button onClick={toggleImage}>Alternar Imagem</button>
    </div>
  );
};

export default Questao02;
