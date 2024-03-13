import React, { useState } from 'react'

import { PokemonImagem } from './PokemonImagem'
import { PokemonContexto } from './PokemonContext'

const PokemonPrincipal = () => {

    //const id = 100
    const [id, setId] = useState(150)

    return (
        <div>
            <h2>Pokemon!</h2>
            <PokemonContexto.Provider value={{id:id, setId:setId}}>
                <PokemonImagem />
            </PokemonContexto.Provider>
        </div>
    )
}

export default PokemonPrincipal