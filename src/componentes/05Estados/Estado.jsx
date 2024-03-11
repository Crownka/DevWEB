import { useState } from "react" // importa o hook useState

const Estado = () => {

    //let contador = 0
    let [contador, setContador] = useState(0) // serve para inicializar o estado e para atualizar o estado

    const incrementarContador = () => { 
        //contador++
        //console.log(contador)
        setContador(contador => contador + 1) // atualiza o estado
    }

    return (
        <div>
            <h2>contador: {contador} </h2>
            <button
                onClick = {() => incrementarContador()} // chama a função incrementarContador
            >
                Incrementar contador
            </button>
        </div>
    )
}

export default Estado;