import React, { useState, useEffect } from 'react';

const Questao04 = () => {
    const [capitais, setCapitais] = useState({ maior: [], menor: [] });

    // Função que retorna uma promessa com os dados das capitais
    const fetchCapitais = () => {
    return new Promise((resolve) => {
        resolve([
        { "capital": ["Dublin"], "population": 4994724 },
        { "capital": ["Nicosia"], "population": 1207361 },
        { "capital": ["Madrid"], "population": 47351567 }
        ]);
    });
};

    // useEffect com then-catch para lidar com a promessa
    // o resto do código é igual ao da Questão 03
    useEffect(() => {
    fetchCapitais()
    .then((data) => {
        const sortedData = data.sort((a, b) => a.population - b.population);

        const menor = sortedData.slice(0, 2).map(country => country.capital[0]);

        const maior = sortedData.slice(-2).map(country => country.capital[0]);

        setCapitais({ menor, maior });
        })
    .catch((error) => {
        console.error('Erro ao processar os dados:', error);
    });
    }, []);

return (
    <div>
        <h2>Capitais com Menor População</h2>
        <ul>
        {capitais.menor.map((capital, index) => (
            <li key={index}>{capital}</li>
        ))}
        </ul>

        <h2>Capitais com Maior População</h2>
        <ul>
        {capitais.maior.map((capital, index) => (
            <li key={index}>{capital}</li>
        ))}
        </ul>
    </div>
  );
};

export default Questao04;
