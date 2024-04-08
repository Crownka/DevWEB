import { useEffect, useState } from "react";

const minhaPromessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const meuNumero = Math.floor(Math.random() * 10) + 1;
        if (meuNumero % 2 === 0) {
            resolve("Número par");
        } else {
            reject("Número ímpar");
        }
    }, 5000);
});

const ComponentePromessa = () => {

    const { resultado, setResultado } = useState('');

    function getPromessa() {
        return minhaPromessa
    }

    useEffect(() => {
    });
};

export default ComponentePromessa;
