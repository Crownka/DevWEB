import React, { useState, useEffect } from "react";

const Questao03 = () => {
    const [capitais, setCapitais] = useState({ maior: [], menor: [] });

    const fetchCapitais = async () => {
    try {
        const response = await fetch(
        "https://restcountries.com/v3.1/region/europe?fields=capital,population"
        );
        const data = await response.json();

        // Ordena os dados de população (menor para maior)
        const sortedData = data.sort((a, b) => a.population - b.population);

        const menor = sortedData.slice(0, 2).map((country) => country.capital[0]);

        const maior = sortedData.slice(-2).map((country) => country.capital[0]);

        // Atualiza o estado com os resultados
        setCapitais({ menor, maior });
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
};

    // useEffect para executar o fetchCapitais apenas uma vez depois que montar o componente
    useEffect(() => {
    fetchCapitais();
    }, []);

    return ( // aqui é só a renderização dos resultados
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

export default Questao03;
