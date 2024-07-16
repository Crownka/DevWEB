import { useState } from "react"

const SaveLoadData = () => {

    const aluno = {
        nome:"Patrick",
        curso:"CC",
        IRA : 7.5
    }

    // Variável de estado para armazenar os dados do aluno
    const [alunoStorage, setAlunoStorage] = useState({dado:"vazio"})

    /**
     * localStorage - armazena dados no navegador do usuário
     * localStorage.setItem("nome", "Fulano") - armazena o valor "Fulano" na chave "nome"
     * localStorage.getItem("nome") - retorna o valor armazenado na chave "nome"
     */
    function saveData(){
        localStorage.setItem("aluno", JSON.stringify(aluno))
        alert("Dado salvo com sucesso")
    }

    function loadData(){
        const alunoStorage = JSON.parse(localStorage.getItem("aluno"))
    }

    return (
        <div>
            <h1>Save Load Data</h1>
            <h3>
                {
                    JSON.stringify(alunoStorage)
                }
            </h3>
            <button onClick={saveData}>
                SAVE DATA
            </button>
            <button onClick={loadData}>
                LOAD DATA
            </button>
        </div>
    )
}

export default SaveLoadData