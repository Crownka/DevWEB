import { Variavel } from "./VariavelContext"
import { useContext } from "react"

const CompA = () => {

    const variavelDeA = { nome: "Fulano", idade: 30, curso: "Desenvolvimento de Software para Web" }

    return (
        <div>
            <Variavel.Provider value={variavelDeA}>
                <CompB />
                <CompC />
            </Variavel.Provider>
        </div>
    )
}

const CompB = () => {

    const variavel = useContext(Variavel)

    return (
        <div>
            <h3>B: {variavel.nome}</h3>
        </div>
    )
}

const CompC = () => {
    return (
        <div>
            <CompD />
        </div>
    )
}

const CompD = () => {
    return (
        <div>
            <CompE />
        </div>
    )
}

const CompE = () => {

    const variavel = useContext(Variavel)

    return (
        <div>
            <h3>E: {variavel.idade}</h3>
        </div>
    )
}

export { CompA, CompB, CompC, CompD, CompE }