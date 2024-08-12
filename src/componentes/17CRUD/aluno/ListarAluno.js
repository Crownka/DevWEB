import React from "react";
import alunos from "./alunos";

import "../css/crud.css"

const ListarAluno = () => {
  const renderizarAlunos = () => {
    const vetorResultado = alunos.map(
        (aluno) => {
            return (
                <tr>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.IRA}</td>
                    <td>
                        <div>
                            <button type="button" className="btn btn-primary">Editar</button>
                            <button type="button" className="btn btn-danger"> Apagar</button>
                        </div>
                    </td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return (
    <>
      <h1>Listar Aluno</h1>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">IRA</th>
            </tr>
          </thead>
          <tbody>
            {renderizarAlunos()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListarAluno;