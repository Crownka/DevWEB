import { eventMap } from "@testing-library/user-event/dist/cjs/event/eventMap.js"
import "../css/crud.css"
import React, {useState} from 'react'

const Criar = () => {

    const {nome, setNome} = useState("")
    const {curso, setCurso} = useState("")
    const {titulacao, setTitulacao} = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + nome + " Curso: " + curso)
    }

    return (
        <div>
            <h1>Criar Professor</h1>
            <form className="form-content" onSubmit={handleSubmit}>
                <div className='mb-1'>
                    <label>Nome:</label>
                    <input className='form-control' type='text' name="nome" id="inputNome" onChange={(event)=>setCurso (event.target.value) } />
                </div>
                <div className='mb-2'   >
                    <label>Curso:</label>
                    <input className='form-control' type='text' value={curso} />
                </div>
                <div className='mb-3'>
                    <select className='form-select' value={titulacao}>
                        <option value="Graduacao">Graduação</option>
                        <option value="Mestrado">Mestrado</option>
                        <option value="Doutorado">Doutorado</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default Criar