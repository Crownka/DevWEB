import "../css/crud.css"

import { useState } from "react"

const CriarAluno = () => {
    
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [IRA, setIra] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + nome + "\n Curso: " + curso)
    }
    
    return (
        <div>
            <h1>Criar Aluno</h1>
            <form className="form-content" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome" 
                        id="inputNome"
                        onChange={(event)=>setNome(event.target.value)}
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">Curso</label>
                    <input
                        className="form-control"
                        type="text"
                        name="curso"
                        id="inputCurso"
                        onChange={(event)=>setCurso(event.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputIra">IRA</label>
                    <input
                        className="form-control"
                        type="text"
                        name="Ira"
                        id="inputIra"
                        onChange={(event)=>setIra(event.target.value)} 
                    />
                </div>
                
                <div className="div-button-submit">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{marginLeft:0}}
                    >
                        Submeter
                    </button>
                </div>

            </form>
        </div>
        
    )
}

export default CriarAluno