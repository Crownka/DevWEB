/* const ImprimeDados = (props) => {
    return (
        <div>
            <h1>Nome: {props.nome}</h1>
            <h1>Matrícula: {props.curso}</h1>
            <h1>Universidade: {props.univ}</h1>
        </div>
    );
} */


const ImprimeDados = ({ nome, mat, curso, univ }) => {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h2>Matrícula: {mat}</h2>
            <h2>Curso: {curso}</h2>
            <h2>Universidade: {univ}</h2>
        </div>
    );
}

export default ImprimeDados;