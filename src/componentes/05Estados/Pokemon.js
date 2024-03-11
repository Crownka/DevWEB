const Pokemon = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(1)

    return (
        <div>
            <h2>ID: {contador} </h2>
            <img
                src = {url + "20.png"}
                alt = "Pokemon"
                width = {200}
            />
            <button
                onClick={() => incrementar()}
            >
                Próximo Pokemon
            </button>
        </div>
    )
}

export default Pokemon;