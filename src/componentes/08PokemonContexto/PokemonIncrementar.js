import { PokemonContexto } from "./PokemonContext"
import { useContext } from "react"

const PokemonIncrementar = () => {
    const { setId } = useContext(PokemonContexto)

    return (
        <div>
            <button
                onClick={() => { setId((anterior) => { return anterior + 1 }) }}
            >
                Incrementar
            </button>
        </div>
    )
}
export default PokemonIncrementar