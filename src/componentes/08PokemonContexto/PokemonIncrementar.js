import { useContext } from 'react';
import { PokemonContexto } from './PokemonContexto';

const PokemonIncrementar = () => {

    const {setId} = useContext(PokemonContexto)

    return (
        <div>
            <button
                onClick={() => setId(a=>a + 1)}     
            >
                Incrementar
            </button>
        </div>
    );
}

export default PokemonIncrementar