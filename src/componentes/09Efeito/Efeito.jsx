import { useEffect, useState } from 'react';

const Efeito = () => {

    const [contador, setContador] = useState(0);
    const [ehPar, setEhPar] = useState(true);

    useEffect(() => {
        if (contador % 2 === 0) {
            setEhPar(true);
        } else {
            setEhPar(false);
        }
        console.log('Efeito disparado');
    }, [contador]);

    return (
        <div>
            <h3>Contador: {contador}</h3>
            <h3>É par: {ehPar} </h3>
            <button onClick={() => setContador (anterior => anterior + 1)}>
                Incrementar
            </button>
        </div>
    );
}